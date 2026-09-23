export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqParsed = {
  faqItems: FaqItem[];
  beforeFaq: string;
  afterFaq: string;
};

// Matches ## FAQ or ## Frequently Asked Questions (case-insensitive, any level h1–h3)
const FAQ_HEADING_RE = /^(#{1,3})\s+(?:frequently\s+asked\s+questions|faq)\s*$/im;

// A paragraph whose only content is **...**
const BOLD_ONLY_LINE_RE = /^\*\*(.+)\*\*$/;

// A heading line, capturing its level — used both to end the FAQ section and to
// read questions written as sub-headings inside it
const HEADING_LINE_RE = /^(#{1,6})\s+(.*)$/;

/**
 * Articles written by the SEO agent use one of three shapes for the FAQ block,
 * and all three have been published:
 *   1. **Question?** followed immediately by the answer line (the documented shape)
 *   2. **Question?**, a blank line, then the answer paragraph
 *   3. a sub-heading per question (### Question?) with the answer below it
 * All three are parsed here. The agent prompt asks for shape 1 going forward.
 */
export function parseFaqFromMarkdown(source: string): FaqParsed {
  // Posts are committed with CRLF line endings. JS `.` does not match \r, so a
  // heading line would never match the line regexes below without this.
  const markdown = source.replace(/\r\n/g, "\n");
  const headingMatch = FAQ_HEADING_RE.exec(markdown);

  if (!headingMatch) {
    return { faqItems: [], beforeFaq: markdown, afterFaq: "" };
  }

  const faqLevel = headingMatch[1].length;
  const headingStart = headingMatch.index;
  const afterHeading = markdown.slice(headingStart + headingMatch[0].length);

  // The FAQ block ends at the next heading of the same level or higher — a
  // deeper heading (### under ##) is a question inside the block, not its end
  const lines = afterHeading.split("\n");
  let endLine = lines.length;
  for (let i = 0; i < lines.length; i++) {
    const m = HEADING_LINE_RE.exec(lines[i].trim());
    if (m && m[1].length <= faqLevel) {
      endLine = i;
      break;
    }
  }

  const faqLines = lines.slice(0, endLine);
  const faqEnd =
    headingStart +
    headingMatch[0].length +
    faqLines.reduce((n, line) => n + line.length + 1, 0);

  const faqItems: FaqItem[] = [];
  let current: { question: string; answer: string[] } | null = null;

  const flush = () => {
    if (!current) return;
    const answer = current.answer.join("\n").trim();
    if (answer) faqItems.push({ question: current.question, answer });
    current = null;
  };

  for (const rawLine of faqLines) {
    const line = rawLine.trim();
    const heading = HEADING_LINE_RE.exec(line);
    const bold = BOLD_ONLY_LINE_RE.exec(line);

    if (heading) {
      flush();
      current = { question: heading[2].trim(), answer: [] };
    } else if (bold) {
      flush();
      current = { question: bold[1].trim(), answer: [] };
    } else if (current && line) {
      current.answer.push(line);
    }
  }
  flush();

  // Strip trailing separator (---) from beforeFaq so we don't get a lone <hr>
  const beforeFaq = markdown
    .slice(0, headingStart)
    .replace(/\n---\s*\n?$/, "\n")
    .trimEnd();

  const afterFaq = markdown.slice(Math.min(faqEnd, markdown.length)).trimStart();

  return { faqItems, beforeFaq, afterFaq };
}

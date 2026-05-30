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
const FAQ_HEADING_RE = /^#{1,3}\s+(?:frequently\s+asked\s+questions|faq)\s*$/im;

// A paragraph whose only content is **...**
const BOLD_ONLY_LINE_RE = /^\*\*(.+)\*\*$/;

export function parseFaqFromMarkdown(markdown: string): FaqParsed {
  const headingMatch = FAQ_HEADING_RE.exec(markdown);

  if (!headingMatch) {
    return { faqItems: [], beforeFaq: markdown, afterFaq: "" };
  }

  const headingStart = headingMatch.index;
  const afterHeading = markdown.slice(headingStart + headingMatch[0].length);

  // Find the next heading (same level or higher) to know where the FAQ block ends
  const nextHeadingMatch = /^#{1,3}\s+/m.exec(afterHeading);

  const faqSection = nextHeadingMatch
    ? afterHeading.slice(0, nextHeadingMatch.index)
    : afterHeading;

  const faqEnd = nextHeadingMatch
    ? headingStart + headingMatch[0].length + nextHeadingMatch.index
    : markdown.length;

  // Parse Q&A pairs: each double-newline-separated block starts with **question**
  // and the rest of the block is the answer
  const blocks = faqSection
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  const faqItems: FaqItem[] = [];

  for (const block of blocks) {
    const lines = block.split("\n");
    const firstLine = lines[0].trim();
    const match = BOLD_ONLY_LINE_RE.exec(firstLine);
    if (match && lines.length > 1) {
      faqItems.push({
        question: match[1].trim(),
        answer: lines.slice(1).join("\n").trim(),
      });
    }
  }

  // Strip trailing separator (---) from beforeFaq so we don't get a lone <hr>
  const beforeFaq = markdown
    .slice(0, headingStart)
    .replace(/\n---\s*\n?$/, "\n")
    .trimEnd();

  const afterFaq = markdown.slice(faqEnd).trimStart();

  return { faqItems, beforeFaq, afterFaq };
}

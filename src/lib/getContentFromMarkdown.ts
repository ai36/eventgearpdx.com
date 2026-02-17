export const getContentFromMarkdown = (markdown: string) => {
  if (!markdown) return null;
  
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const quoteMatch = markdown.match(/^>\s+(.+)$/m);
  const coverMatch = markdown.match(/^!\[.*\]\((.*)\)$/m);

  return {
    title: titleMatch?.[1] ?? null,
    quote: quoteMatch?.[1] ?? null,
    cover: coverMatch?.[1] ?? null,
  };
}
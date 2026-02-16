export const getAuthorAvatarByName = (author: string | undefined | null) => {
  if (!author) return null;

  const parts = author.split(" ");
  const len = parts.length;

  if (len === 1) {
    return parts[0][0].toUpperCase();
  }

  return parts[0][0].toUpperCase() + parts[len - 1][0].toUpperCase();
}
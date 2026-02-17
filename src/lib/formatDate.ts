export const formatDate = (date: string | null) => {
  if (!date) return null;

  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return d.toLocaleDateString(undefined, options);
}
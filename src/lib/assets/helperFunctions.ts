export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const options = { year: "numeric", month: "short", day: "numeric" };

  const formatter = new Intl.DateTimeFormat("sv-SE", options);
  const parts = formatter.formatToParts(date);

  const day = parts.find((part) => part.type === "day").value;
  const month = parts.find((part) => part.type === "month").value;
  const year = parts.find((part) => part.type === "year").value;
  const formattedDate = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`;

  return formattedDate;
}

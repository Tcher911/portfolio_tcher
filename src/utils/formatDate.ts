export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  let dateToFormat = date;
  if (!date.includes("T")) {
    dateToFormat = `${date}T00:00:00`;
  }

  const targetDate = new Date(dateToFormat);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let relativeDate = "";

  if (yearsAgo > 0) {
    relativeDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    relativeDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    relativeDate = `${daysAgo}d ago`;
  } else {
    relativeDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${relativeDate})`;
}

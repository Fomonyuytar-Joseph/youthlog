export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = days[d.getDay()];
  const dayNumber = d.getDate();
  const monthName = months[d.getMonth()];
  const year = d.getFullYear();

  return `${dayName} ${dayNumber} ${monthName} ${year}`;
}

// Example usage
// const today = new Date();
// console.log(formatDate(today)); // e.g. "Sat 20 Sep 2025"

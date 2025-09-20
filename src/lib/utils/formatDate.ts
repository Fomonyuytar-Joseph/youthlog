export function formatDate(date: Date): string {
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

  const dayName = days[date.getDay()]; // 0-6
  const dayNumber = date.getDate(); // 1-31
  const monthName = months[date.getMonth()]; // 0-11
  const year = date.getFullYear();

  return `${dayName} ${dayNumber} ${monthName} ${year}`;
}

// Example usage
const today = new Date();
console.log(formatDate(today)); // e.g. "Sat 20 Sep 2025"

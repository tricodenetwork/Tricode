export function calculateTimeline(startDate, endDate) {
  // Split and convert to numbers
  const startDateParts = startDate?.split("-").map(Number);
  const endDateParts = endDate?.split("-").map(Number);

  // Parse dates
  const start = new Date(
    startDateParts[0],
    startDateParts[1] - 1,
    startDateParts[2]
  ); // Year, month (0-indexed), day
  const end = new Date(endDateParts[0], endDateParts[1] - 1, endDateParts[2]); // Year, month (0-indexed), day

  // Calculate the difference in milliseconds
  const difference = end.getTime() - start.getTime();

  // Convert milliseconds to days
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Convert days to months, weeks, and remaining days
  const months = Math.floor(days / 30);
  const remainingDays = days % 30;
  const weeks = Math.floor(remainingDays / 7);
  const daysLeft = remainingDays % 7;

  // Format the timeline
  const timeline = `${months}M : ${weeks}W : ${daysLeft}D`;

  return timeline;
}

export function getStatusClass(v) {
  let statusClass;

  switch (v.status) {
    case "Paused":
      statusClass = "text-[#d9d9d9]";
      break;
    case "Awaiting your review":
      statusClass = "text-purple-800";
      break;
    case "Started":
      statusClass = "text-cyan-400";
      break;
    case "Ongoing":
      statusClass = "text-amber-400";
      break;
    case "Completed":
      statusClass = "text-binance_green";
      break;
    default:
      statusClass = "text-gray-800";
      break;
  }

  return statusClass;
}

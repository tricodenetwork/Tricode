export const getStatusClasses = (status) => {
  const lowerCaseStatus = status?.toLowerCase();
  switch (lowerCaseStatus) {
    case "completed":
      return "text-binance_green bg-binance_green/25";
    case "paused":
    case "pending":
      return "text-appRed bg-appRed/25";
    case "planned":
      return "text-slate-600 bg-slate-600/25";
    case "started":
      return "text-cyan-400";
    case "ongoing":
      return "text-amber-500 bg-amber-400/25";
    default:
      return lowerCaseStatus?.includes("awaiting")
        ? "text-purple-800 bg-purple-800/25"
        : "";
  }
};
export const getStatusClassesHex = (status) => {
  const lowerCaseStatus = status?.toLowerCase();
  switch (lowerCaseStatus) {
    case "completed":
      return "#38A312";
    case "paused":
    case "pending":
      return "#C53A3A";
    case "planned":
      return "#475569";
    case "started":
      return "#22D3EE";
    case "ongoing":
      return "#FBBF24";
    default:
      return lowerCaseStatus?.includes("awaiting") ? "#6B21A8" : "#000000";
  }
};

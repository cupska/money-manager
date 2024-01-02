export const getDateRange = (bulan: number) => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), bulan, 1);
  const lastDayOfMonth = new Date(today.getFullYear(), bulan + 1);
  lastDayOfMonth.setMilliseconds(-1);
  return { start: firstDayOfMonth, end: lastDayOfMonth };
};

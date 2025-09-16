export function setDateFromString(dateString: Date | null) {
  if (!dateString) return "";
  const myDate = new Date(dateString);
  const res = myDate.toDateString();
  return res;
}

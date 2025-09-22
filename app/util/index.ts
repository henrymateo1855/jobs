export function setDateFromString(dateString: Date | null) {
  if (!dateString) return "";
  const myDate = new Date(dateString);
  const res = myDate.toDateString();
  return res;
}

export function capitalizeName(name: string): string {
  const words = name.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
}

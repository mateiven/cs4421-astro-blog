export function fridayMessage(date: Date): string {
  if (date.getDay() === 5) {
    return "Thank God it's Friday";
  }

  return "Not Friday";
}
export function convertTemp(temp, unit) {
  return unit === "imperial" ? Math.ceil(temp * (9 / 5) + 32) : Math.ceil(temp);
}

export function isS(
  checkers: string[] | readonly string[],
  toCheck: string
) {
  return checkers.includes(toCheck);
}

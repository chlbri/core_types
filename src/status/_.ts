export function isN<T extends ReadonlyArray<number>>(
  DATA: T,
  check: number
): boolean {
  const _arg = Math.ceil(check);
  return DATA.includes(_arg);
}

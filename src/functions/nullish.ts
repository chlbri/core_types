export function isNullish(val: any): val is undefined | null {
  return val === null || val === undefined;
}

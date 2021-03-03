// TODO : Create test
function isNullish(val: any): val is undefined | null {
  return val === null || val === undefined;
}

export { isNullish };

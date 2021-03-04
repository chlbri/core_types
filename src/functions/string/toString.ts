export function toString<T extends any[]>(...args: T) {
  return args.map((val) => val.toString());
}

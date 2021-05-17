export type WithoutPermissions<T> = Omit<
  T,
  "_read" | "_update" | "_delete"
>;

export function isWithoutPermissions(
  val: any
): val is WithoutPermissions<any> {
  return Object.keys(val).every(
    (val) => !["_read", "_update", "_delete"].includes(val)
  );
}

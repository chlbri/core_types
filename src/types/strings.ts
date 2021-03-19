import { NUMBERS, STRINGS } from "../constants";

export type LowerLetters = typeof STRINGS.LETTERS[number];

export type UpperLetters = Uppercase<LowerLetters>;

export type Letters = UpperLetters | LowerLetters;

export type Digit = typeof NUMBERS.DIGITS[number];

export type StringLocalLitterals = Letters | Digit;

type RAN = ReadonlyArray<number>;
type RAS = ReadonlyArray<string>;

export function isStringLocalLitterals(
  val: any
): val is StringLocalLitterals {
  // #region Checkers
  const all = [
    ...STRINGS.LETTERS,
    ...STRINGS.LETTERS.map((val) => val.toUpperCase()),
    ...NUMBERS.DIGITS.map((val) => "" + val),
    ...NUMBERS.DIGITS,
  ];
  // #endregion

  return all.includes(val);
}

export type Email = `${string}@${string}.${string}`;

export type _JoinStringHelper = string | number | boolean | bigint;

export type JoinString<
  T extends readonly any[],
  sep extends string = " "
> = T extends []
  ? ""
  : T extends [_JoinStringHelper]
  ? `${T[0]}`
  : T extends [_JoinStringHelper, ...infer U]
  ? `${T[0]}${sep}${JoinString<U, sep>}`
  : string;

export type AddString<
  T,
  Before extends string = "",
  After extends string = ""
> = `${Before}${T & string}${After}`;

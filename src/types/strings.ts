import { NUMBERS, STRINGS } from "../constants";

type LowerLetters = typeof STRINGS.LOWER_LETTERS[number];

type UpperLetters = Uppercase<LowerLetters>;

type Digit = typeof NUMBERS.DIGITS[number];

type StringLocalLitterals = LowerLetters | UpperLetters | Digit;
type Email = `${string}@${string}.${string}`;

type _JoinStringHelper = string | number | boolean | bigint;

type JoinString<
  T extends readonly any[],
  sep extends string = " "
> = T extends []
  ? ""
  : T extends [_JoinStringHelper]
  ? `${T[0]}`
  : T extends [_JoinStringHelper, ...infer U]
  ? `${T[0]}${sep}${JoinString<U, sep>}`
  : string;

type AddString<
  T,
  Before extends string = "",
  After extends string = ""
> = `${Before}${T & string}${After}`;

export {
  LowerLetters,
  UpperLetters,
  Digit,
  StringLocalLitterals,
  Email,
  JoinString,
  AddString,
};

import { NUMBERS, STRINGS } from "../constants";
export declare type LowerLetters = typeof STRINGS.LETTERS[number];
export declare type UpperLetters = Uppercase<LowerLetters>;
export declare type Digit = typeof NUMBERS.DIGITS[number];
export declare type StringLocalLitterals = LowerLetters | UpperLetters | Digit;
export declare type Email = `${string}@${string}.${string}`;
export declare type _JoinStringHelper = string | number | boolean | bigint;
export declare type JoinString<T extends readonly any[], sep extends string = " "> = T extends [] ? "" : T extends [_JoinStringHelper] ? `${T[0]}` : T extends [_JoinStringHelper, ...infer U] ? `${T[0]}${sep}${JoinString<U, sep>}` : string;
export declare type AddString<T, Before extends string = "", After extends string = ""> = `${Before}${T & string}${After}`;

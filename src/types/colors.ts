import { COLORS } from '../Constants';

export type Color1Digit = typeof COLORS.COLOR_DIGITS[number];
export type TransparencyDigits =
  typeof COLORS.TRANSPARENCY_DIGITS[number];
export type ColorNumberDigits =
  typeof COLORS.COLOR_NUMBER_DIGITS[number];
export type ColorStringDigits =
  typeof COLORS.COLOR_STRING_DIGITS[number];
export type Color2Digits = `${Color1Digit}${Color1Digit}`;
export type CssColors = typeof COLORS.CSS_COLORS[number];

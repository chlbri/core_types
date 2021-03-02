import { COLORS } from "../constants";

type Color1Digit = typeof COLORS.COLOR_DIGITS[number];

type TransparencyDigits = typeof COLORS.TRANSPARENCY_DIGITS[number];
type ColorNumberDigits = typeof COLORS.COLOR_NUMBER_DIGITS[number];
type ColorStringDigits = typeof COLORS.COLOR_STRING_DIGITS[number];

type Color2Digits = `${Color1Digit}${Color1Digit}`;
type CssColors = typeof COLORS.CSS_COLORS[number];

export {
  TransparencyDigits,
  ColorNumberDigits,
  ColorStringDigits,
  Color2Digits,
  Color1Digit,
  CssColors,
};

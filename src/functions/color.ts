import {
  Color1Digit,
  Color2Digits,
  ColorNumberDigits,
  TransparencyDigits,
} from '../types';

export function rgba(
  red: ColorNumberDigits,
  green: ColorNumberDigits,
  blue: ColorNumberDigits,
  alpha: TransparencyDigits,
) {
  return `rgba(${red},${green},${blue},${alpha})`;
}

export function colorHex1(
  red: Color1Digit,
  green: Color1Digit,
  blue: Color1Digit,
  alpha?: Color1Digit,
) {
  return `#${red}${green}${blue}${alpha ?? ''}` as const;
}

export function colorHex2(
  red: Color2Digits,
  green: Color2Digits,
  blue: Color2Digits,
  alpha?: Color2Digits,
) {
  return `#${red}${green}${blue}${alpha ?? ''}`;
}

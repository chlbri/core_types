import { STATUS_STRINGS } from '../../Constants/strings';
import { StatusString } from '../../types';
import { isS } from './isS';

export function isStatusString(
  value: string,
): value is StatusString {
  return isS(STATUS_STRINGS, value);
}

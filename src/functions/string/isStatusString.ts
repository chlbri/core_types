import { STATUS_STRINGS } from "../../constants/strings";
import { StatusString } from "../../types";
import { isS } from "./isS";

export function isStatusString(value: string): value is StatusString {
  return isS(STATUS_STRINGS, value);
}

import { NUMBERS, STRINGS } from "../../constants";
import { Exception } from "./Exception";

const DEFAULT_EXCEPTION = new Exception(
  NUMBERS.ERROR_CODE_DEFAULT,
  STRINGS.EXCEPTION_MESSAGE_DEFAULT
);

const UNKNOWN_EXCEPTION = new Exception(
  NUMBERS.ERROR_UNKNOWN,
  STRINGS.EXCEPTION_MESSAGE_UNKNOWN
);

export { DEFAULT_EXCEPTION, UNKNOWN_EXCEPTION, Exception };

import { ERROR_CODE_DEFAULT, ERROR_UNKNOWN } from "../constants/numbers";
import { EXCEPTION_MESSAGE_DEFAULT, EXCEPTION_MESSAGE_UNKNOWN } from "../constants/strings";

export default class Exception {
  constructor(
    public readonly statut: number,
    public readonly message: string
  ) {}
}

const DEFAULT_EXCEPTION = new Exception(
  ERROR_CODE_DEFAULT,
  EXCEPTION_MESSAGE_DEFAULT
);

const UNKNOWN_EXCEPTION = new Exception(
  ERROR_UNKNOWN,
  EXCEPTION_MESSAGE_UNKNOWN
);

export { DEFAULT_EXCEPTION, UNKNOWN_EXCEPTION };

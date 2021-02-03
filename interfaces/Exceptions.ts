import { NUMBERS, STRINGS } from "../Constants";

class Exception {
  constructor(
    public readonly statut: number,
    public readonly message: string
  ) {}
}

const DEFAULT_EXCEPTION = new Exception(
  NUMBERS.ERROR_CODE_DEFAULT,
  STRINGS.EXCEPTION_MESSAGE_DEFAULT
);

const UNKNOWN_EXCEPTION = new Exception(
  NUMBERS.ERROR_UNKNOWN,
  STRINGS.EXCEPTION_MESSAGE_UNKNOWN
);

export { DEFAULT_EXCEPTION, UNKNOWN_EXCEPTION, Exception };

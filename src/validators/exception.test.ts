import { ExceptionStatus, EXCEPTION_CODES } from "../status";
import { generateTests } from "../test/functions";
import { TupleOf } from "../types";
import { Exception, EXCEPTIONS } from "./exception";

describe("Tests", () => {
  generateTests(
    (code: ExceptionStatus) => EXCEPTIONS[code],
    EXCEPTION_CODES.map((val) => [val]) as TupleOf<[ExceptionStatus]>,
    EXCEPTION_CODES.map((val) => new Exception(val))
  );
});

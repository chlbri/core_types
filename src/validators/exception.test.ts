import { EXCEPTION_CODES } from "../status";
import { Exception, EXCEPTIONS } from "./exception";

describe("Tests", () => {
  (() =>
    EXCEPTION_CODES.map((val) =>
      it(`${val} shoulds return ${JSON.stringify(
        new Exception(val)
      )}`, () => {
        expect(EXCEPTIONS[val]).toStrictEqual(new Exception(val));
      })
    ))();
});

import { isStatusServerError } from "./server";
import { generateStatusTests } from "./setup_test";

describe("Tests", () => {
  generateStatusTests(isStatusServerError, [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
  ]);
});

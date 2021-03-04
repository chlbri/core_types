import { isStatusInformation } from "./information";
import { generateStatusTests } from "./setup_test";

describe("Tests", () => {
  generateStatusTests(isStatusInformation, [
    false,
    true,
    true,
    true,
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
    false,
  ]);
});

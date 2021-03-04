import { generateStatusTests } from "./setup_test";
import { isStatusSuccessFull } from "./successfull";

describe("Tests", () => {
  generateStatusTests(isStatusSuccessFull, [
    false,
    false,
    false,
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
  ]);
});

import { generate2Tests } from "../test";
import { colorHex1, colorHex2 } from "./color";

describe("colorHex1", () => {
  generate2Tests(
    colorHex1,
    [
      [3, "f", "e"],
      [1, "f", 2, 3],
    ],
    ["#3fe", "#1f23"]
  );
});

describe("colorHex2", () => {
  generate2Tests(
    colorHex2,
    [
      ["03", "ff", "e5"],
      ["13", "ff", "f8", "09"],
    ],
    ["#03ffe5", "#13fff809"]
  );
});

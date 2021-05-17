import { Actor } from "../entities";
import { generate3Tests } from "../test";
import { checkPermissions } from "./dao";

describe("Check Permissions", () => {
  const actor: Actor = {
    ip: "",
    login: "",
    _id: "",
    permissions: [1, 2, 3, 4],
  };

  generate3Tests(
    checkPermissions,
    [
      [actor, [2, 7, 4]],
      [actor, [2, 3, 4]],
      [actor, [2, 7, 4]],
    ],
    [false, true, false],
    true
  );
});

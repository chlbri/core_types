import { generate5Tests } from "../test";
import { log } from "./log";

describe("should log the data", () => {
  const spy = generate5Tests(
    log,
    [[1], [2], [3, 4], ["true"], [false]],
    [undefined, undefined, undefined, undefined, undefined]
  ).spy;

  it("Last Verifications   ==========================================> ", () => {
    expect(spy).toBeCalledWith(1);
    expect(spy).toBeCalledWith(2);
    expect(spy).toBeCalledWith(3, 4);
    expect(spy).toBeCalledWith("true");
    expect(spy).toBeCalledWith(false);
    expect(spy).toBeCalledTimes(5);
  });
});

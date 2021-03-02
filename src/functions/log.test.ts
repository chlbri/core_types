import { log } from "./log";

const table = [1, 2, 3, 4, "true", false] as const;
const logSpy = jest.spyOn(console, "log");
it("should log the data", () => {
  table.forEach(log);
  expect(logSpy).toBeCalledWith(1);
  expect(logSpy).toBeCalledWith(2);
  expect(logSpy).toBeCalledWith(3);
  expect(logSpy).toBeCalledWith(4);
  expect(logSpy).toBeCalledWith("true");
  expect(logSpy).toBeCalledWith(false);
  expect(logSpy).toBeCalledTimes(6);
});

import { generateStatusTests } from "./setup_test";
import { isTimeOutClientError } from "./timeout";

generateStatusTests(isTimeOutClientError, [
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
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
]);

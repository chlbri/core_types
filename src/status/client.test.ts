import { isStatusClientError } from "./client";
import { generateTestTable, mapperTest } from "./setup_test";

const expecteds = [
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
  false,
  false,
  false,
  false,
  false,
] as const;

generateTestTable(...expecteds).map(mapperTest(isStatusClientError));
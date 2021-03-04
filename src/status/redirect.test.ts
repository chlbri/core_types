import { isStatusRedirect } from "./redirect";
import { generateTestTable, mapperTest } from "./setup_test";

const expecteds = [
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
  false,
  false,
  false,
  false,
  false,
] as const;

generateTestTable(...expecteds).map(mapperTest(isStatusRedirect));
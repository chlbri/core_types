import { isStatusServerError } from "./server";
import { generateTestTable, mapperTest } from "./_";

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
  false,
  false,
  true,
  true,
  true,
  false,
  false,
] as const;

generateTestTable(...expecteds).map(mapperTest(isStatusServerError));

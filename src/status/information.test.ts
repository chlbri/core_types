import { isStatusInformation } from "./information";
import { generateTestTable, mapperTest } from "./_";

const expecteds = [
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
] as const;

generateTestTable(...expecteds).map(mapperTest(isStatusInformation));

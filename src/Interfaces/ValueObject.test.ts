import { generateTestTable, mapperTest, TestActual } from "../test";
import { LenghtOf, TupleOf } from "../types";
import {
  EXCEPTIONS,
  FormatedNumberValidator,
  NumberExactValidator,
  NumberMaxValidator,
  NumberMinValidator,
  RequiredNumberValidator,
  RequiredValidator,
  StringExactLengthValidator,
  StringMaxLengthValidator,
  StringMinLengthValidator,
  StringRequiredValidator,
} from "../validators";
import { ValueObject as VO } from "./ValueObject";

const requiredV = new RequiredValidator(EXCEPTIONS[404]);
const numberMinV = new NumberMinValidator(5, EXCEPTIONS[302]);
const numberExactV = new NumberExactValidator(7, EXCEPTIONS[341]);
const numberMaxV = new NumberMaxValidator(10, EXCEPTIONS[351]);
const numberRequiredV = new RequiredNumberValidator(EXCEPTIONS[405]);

const stringMinV = new StringMinLengthValidator(5, EXCEPTIONS[307]);
const stringExactV = new StringExactLengthValidator(
  7,
  EXCEPTIONS[342]
);
const stringMaxV = new StringMaxLengthValidator(10, EXCEPTIONS[352]);
const stringRequiredV = new StringRequiredValidator(EXCEPTIONS[406]);
const stringNumberFormatedV1 = new FormatedNumberValidator(
  undefined,
  EXCEPTIONS[380]
);
const stringNumberFormatedV2 = new FormatedNumberValidator(
  6,
  EXCEPTIONS[390]
);

const actuals: TupleOf<TestActual<VO>, 18> = [
  [new VO(5, [requiredV, numberMinV])], //true*
  [new VO(17, [requiredV, numberMaxV])], //false*
  [new VO(undefined, [requiredV, numberMaxV])], //false*
  [new VO(undefined, [numberMaxV])], //false*
  [new VO("123456731045", [stringMinV, stringNumberFormatedV1])], //true*
  [new VO("4444", [stringMinV, stringNumberFormatedV1])], //false*
  [new VO("cinq5", [stringMinV, stringNumberFormatedV1])], //false*
  [new VO("55555", [stringMinV, stringNumberFormatedV1])], //true*
  [new VO("55555", [stringMinV, stringNumberFormatedV2])], //false*
  [new VO("six==6", [stringMinV, stringNumberFormatedV2])], //false*
  [new VO("666666", [stringMinV, stringNumberFormatedV2])], //true*
  [new VO("sept==7", [stringExactV])], //true*
  [new VO("six==6", [stringRequiredV])], //true*
  [new VO("onze======11", [stringMaxV])], //false*
  [new VO(45, [numberRequiredV])], //true
  [new VO(7, [numberExactV])], //true
  [new VO(415, [numberExactV])], //false
  [new VO("45", [numberRequiredV])], //false
];

const expecteds: TupleOf<any, LenghtOf<typeof actuals>> = [
  5,
  EXCEPTIONS[351],
  EXCEPTIONS[404],
  EXCEPTIONS[351],
  "123456731045",
  EXCEPTIONS[307],
  EXCEPTIONS[380],
  "55555",
  EXCEPTIONS[390],
  EXCEPTIONS[390],
  "666666",
  "sept==7",
  "six==6",
  EXCEPTIONS[352],
  45,
  7,
  EXCEPTIONS[341],
  EXCEPTIONS[405],
];

const mapping = generateTestTable(actuals, expecteds);

const safeHelper = (vo: VO) => vo.safe;

describe("VO.safe", () => {
  const mapper = mapperTest(safeHelper);
  mapping.map(mapper);
});

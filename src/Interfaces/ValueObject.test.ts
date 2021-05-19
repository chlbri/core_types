import { sliceArray } from "../functions";
import { generate18Tests, generate9Tests } from "../test";
import { LengthOf, TupleOf } from "../types";
import {
  EXCEPTIONS,
  FormatedNumberValidator,
  IValidator,
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

// #region Functions to test
const safe = (vo: VO) => vo.safe;
const unSafe = (vo: VO) => vo.unSafe;
const isValid = (vo: VO) => vo.isValid;
const chain = (vo1: VO, vo2: VO) => vo1.chain(vo2);
// #endregion

// #region Type Helpers
type SafeParameters = Parameters<typeof safe>;
type SafeReturnType = ReturnType<typeof safe>;
type UnSafeReturnType = ReturnType<typeof unSafe>;
type IsValidReturnType = ReturnType<typeof isValid>;
type ChainParameters = Parameters<typeof chain>;
type ChainReturnType = ReturnType<typeof chain>;
// #endregion

// #region Validators
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
// #endregion

// #region Other types
type LengthChain = 9;
type Length = LengthOf<typeof valueActuals>;
// #endregion

// #region Datas to test
const valueActuals = [
  5,
  17,
  undefined,
  undefined,
  "123456731045",
  "4444",
  "cinq5",
  "55555",
  "55555",
  "six==6",
  "666666",
  "sept==7",
  "six==6",
  "onze======11",
  45,
  7,
  415,
  "45",
] as const;

const validatorsActuals: TupleOf<IValidator[], Length> = [
  [requiredV, numberMinV],
  [requiredV, numberMaxV],
  [requiredV, numberMaxV],
  [numberMaxV],
  [stringMinV, stringNumberFormatedV1],
  [stringMinV, stringNumberFormatedV1],
  [stringMinV, stringNumberFormatedV1],
  [stringMinV, stringNumberFormatedV1],
  [stringMinV, stringNumberFormatedV2],
  [stringMinV, stringNumberFormatedV2],
  [stringMinV, stringNumberFormatedV2],
  [stringExactV],
  [stringRequiredV],
  [stringMaxV],
  [numberRequiredV],
  [numberExactV],
  [numberExactV],
  [numberRequiredV],
];

function getActuals() {
  return validatorsActuals.map((validatorsActual, i) => {
    const out = new VO(valueActuals[i], validatorsActual);
    return [out] as const;
  }) as TupleOf<SafeParameters, Length>;
}

const chainActuals = sliceArray(getActuals(), 2) as TupleOf<
  ChainParameters,
  LengthChain
>;

const chainsExpected: TupleOf<ChainReturnType, LengthChain> = [
  getActuals()[1][0],
  getActuals()[2][0],
  getActuals()[5][0],
  getActuals()[6][0],
  getActuals()[8][0],
  getActuals()[11][0],
  getActuals()[13][0],
  getActuals()[15][0],
  getActuals()[16][0],
];

const safExpecteds: TupleOf<SafeReturnType, Length> = [
  valueActuals[0],
  EXCEPTIONS[351],
  EXCEPTIONS[404],
  EXCEPTIONS[351],
  valueActuals[4],
  EXCEPTIONS[307],
  EXCEPTIONS[380],
  valueActuals[7],
  EXCEPTIONS[390],
  EXCEPTIONS[390],
  valueActuals[10],
  valueActuals[11],
  valueActuals[12],
  EXCEPTIONS[352],
  valueActuals[14],
  valueActuals[15],
  EXCEPTIONS[341],
  EXCEPTIONS[405],
];

const unSafExpecteds = valueActuals as TupleOf<
  UnSafeReturnType,
  Length
>;

const isValidExpecteds: TupleOf<IsValidReturnType, Length> = [
  true,
  false,
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  false,
  true,
  true,
  false,
  false,
];
// #endregion

describe("VO.safe", () => {
  generate18Tests(safe, getActuals(), safExpecteds, true);
});

describe("VO.unSafe", () => {
  generate18Tests(unSafe, getActuals(), unSafExpecteds, true);
});

describe("VO.isValid", () => {
  generate18Tests(isValid, getActuals(), isValidExpecteds, true);
});

describe("VO.chain", () => {
  console.log("chainActuals :", chainActuals);
  console.log("chainsExpected :", chainsExpected);
  generate9Tests(chain, chainActuals, chainsExpected, true);
});

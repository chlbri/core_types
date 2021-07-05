import { sliceArray } from '../functions';
import { generate18Tests, generateTests } from '../test';
import { LengthOf, TupleOf } from '../types';
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
} from '../validators';
import { ValueObject as VO } from './ValueObject';

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
const numberMinV = new NumberMinValidator(5, EXCEPTIONS[502]);
const numberExactV = new NumberExactValidator(
  7,
  EXCEPTIONS[541],
);
const numberMaxV = new NumberMaxValidator(10, EXCEPTIONS[551]);
const numberRequiredV = new RequiredNumberValidator(
  EXCEPTIONS[405],
);

const stringMinV = new StringMinLengthValidator(
  5,
  EXCEPTIONS[507],
);
const stringExactV = new StringExactLengthValidator(
  7,
  EXCEPTIONS[542],
);
const stringMaxV = new StringMaxLengthValidator(
  10,
  EXCEPTIONS[552],
);
const stringRequiredV = new StringRequiredValidator(
  EXCEPTIONS[406],
);
const stringNumberFormatedV1 = new FormatedNumberValidator(
  undefined,
  EXCEPTIONS[580],
);
const stringNumberFormatedV2 = new FormatedNumberValidator(
  6,
  EXCEPTIONS[590],
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
  '125456751045',
  '4444',
  'cinq5',
  '55555',
  '55555',
  'six==6',
  '666666',
  'sept==7',
  'six==6',
  'onze======11',
  45,
  7,
  415,
  '45',
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

const chainActuals = sliceArray(
  validatorsActuals.map((validatorsActual, i) => {
    return new VO(valueActuals[i], validatorsActual);
  }),
  2,
);

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
const chainsExpected2 = [
  getActuals()[1][0],
  getActuals()[2][0],
  getActuals()[5][0],
  getActuals()[6][0],
  getActuals()[8][0],
  getActuals()[11][0],
  getActuals()[13][0],
  getActuals()[16][0],
];

const safExpecteds: TupleOf<SafeReturnType, Length> = [
  valueActuals[0],
  numberMaxV.exception,
  requiredV.exception,
  numberMaxV.exception,
  valueActuals[4],
  stringMinV.exception,
  stringNumberFormatedV1.exception,
  valueActuals[7],
  stringNumberFormatedV2.exception,
  stringNumberFormatedV2.exception,
  valueActuals[10],
  valueActuals[11],
  valueActuals[12],
  stringMaxV.exception,
  valueActuals[14],
  valueActuals[15],
  numberExactV.exception,
  numberRequiredV.exception,
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

describe('VO.safe', () => {
  generate18Tests(safe, getActuals(), safExpecteds, true);
});

describe('VO.unSafe', () => {
  generate18Tests(unSafe, getActuals(), unSafExpecteds, true);
});

describe('VO.isValid', () => {
  generate18Tests(isValid, getActuals(), isValidExpecteds, true);
});

describe('VO.chain', () => {
  generateTests(
    chain,
    chainActuals,
    [
      getActuals()[1][0],
      getActuals()[2][0],
      getActuals()[5][0],
      getActuals()[6][0],
      getActuals()[8][0],
      getActuals()[11][0],
      getActuals()[13][0],
      getActuals()[15][0],
      getActuals()[16][0],
    ],
    true,
  );
});

import { FetchStatus, isBad, isGood } from "../helpers";
import { CoreTypes } from "../Types";

type NExtract<T, U extends T> = T extends U ? T : never;
type NExclude<T, U extends T> = T extends U ? never : T;

type GoodResponse<T = undefined> = {
  status: NExtract<FetchStatus, 200 | 204>;
  payload?: T;
};

type BadResponse<T = undefined> = {
  status: NExclude<FetchStatus, 200 | 204>;
  error?: T;
};

function isGoodResponse<E, T extends CoreTypes>(
  val: ReturnData<E, T>
): val is GoodResponse {
  return isGood(val.status);
}

function isBadResponse<E, T extends CoreTypes>(
  val: ReturnData<E, T>
): val is BadResponse {
  return isBad(val.status);
}

type ReturnData<
  Good = undefined,
  Bad extends CoreTypes = undefined
> = GoodResponse<Good> | BadResponse<Bad>;

type PromiseReturnData<
  Good = undefined,
  Bad extends CoreTypes = undefined
> = Promise<ReturnData<Good, Bad>>;

const Response500: BadResponse = {
  status: 500,
} as const;
const Response300: BadResponse = {
  status: 300,
};
const Response404: BadResponse = {
  status: 404,
};
const Response204: GoodResponse = {
  status: 204,
  payload: undefined,
};

export {
  ReturnData,
  GoodResponse,
  BadResponse,
  PromiseReturnData,
  isGoodResponse,
  isBadResponse,
  Response300,
  Response404,
  Response500,
  Response204,
};

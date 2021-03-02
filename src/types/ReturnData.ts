import { Nullish } from ".";
import {
  ClientErrorStatus,
  InformationStatus,
  RedirectStatus,
  ServerErrorStatus,
  Status,
  SuccesfullStatus,
} from "..";

// #region types
type SuccessData<T = any> = {
  status: SuccesfullStatus;
  payload: T;
};

type InformationData<T = any> = {
  status: InformationStatus;
  payload: Nullish<T>;
};

type RedirectData<T = any> = {
  status: RedirectStatus;
  payload: Nullish<T>;
};

type ClientErrorData = {
  status: ClientErrorStatus;
};

type ServerErrorData = {
  status: ServerErrorStatus;
};

type ReturnData<T = any> =
  | SuccessData<T>
  | InformationData<T>
  | RedirectData<T>
  | ClientErrorData
  | ServerErrorData;

type PromiseReturnData<T = any> = Promise<ReturnData<T>>;

type ReturnMessageKey<T extends string = string> = `${T}_${Status}`;
// #endregion

export {
  SuccessData,
  InformationData,
  RedirectData,
  ClientErrorData,
  ServerErrorData,
  ReturnData,
  PromiseReturnData,
  ReturnMessageKey,
};

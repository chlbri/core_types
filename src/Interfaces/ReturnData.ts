import { Entity, WithId } from "../entities";
import {
  ClientErrorStatus,
  InformationStatus,
  RedirectStatus,
  ServerErrorStatus,
  Status,
  SuccesfullStatus,
} from "../status";
import { Nullish } from "../types";
import { WithoutId } from "./../entities/WithoutId";

// #region types
export type SuccessData<T = any> = {
  status: SuccesfullStatus;
  payload: T;
};

export type InformationData<T = any> = {
  status: InformationStatus;
  payload?: Nullish<T>;
};

export type RedirectData<T = any> = {
  status: RedirectStatus;
  payload?: Nullish<T>;
};

export type ClientErrorData = {
  status: ClientErrorStatus;
};

export type ServerErrorData = {
  status: ServerErrorStatus;
};

export type ReturnData<T = any> =
  | SuccessData<T>
  | InformationData<T>
  | RedirectData<T>
  | ClientErrorData
  | ServerErrorData;

export type PromiseReturnData<T = any> = Promise<ReturnData<T>>;

export type DataFromPromiseWithId<
  T extends PromiseReturnData<Entity>
> = T extends PromiseReturnData<infer U>
  ? U extends any[]
    ? ReturnData<WithId<U[number]>[]>
    : ReturnData<WithId<U>>
  : never;

export type DataFromPromiseWithoutId<
  T extends PromiseReturnData<any>
> = T extends PromiseReturnData<infer U>
  ? U extends any[]
    ? ReturnData<WithoutId<U[number]>[]>
    : ReturnData<WithoutId<U>>
  : never;

export type ReturnMessageKey<
  T extends string = string
> = `${T}_${Status}`;
// #endregion

import { WithoutId } from "./../entities/WithoutId";
import { Entity, WithId } from "../entities";
import {
  ClientErrorStatus,
  InformationStatus,
  RedirectStatus,
  ServerErrorStatus,
  Status,
  SuccesfullStatus,
} from "../status";
import { Nullish, ThenArg } from "../types";

// #region types
export type SuccessData<T = any> = T extends true | undefined | null
  ? {
      status: SuccesfullStatus;
      payload: T;
    }
  : {
      status: SuccesfullStatus;
    };

export type InformationData<T = any> = T extends
  | true
  | undefined
  | null
  ? {
      status: InformationStatus;
      payload?: Nullish<T>;
    }
  : {
      status: InformationStatus;
    };

export type RedirectData<T = any> = T extends true | undefined | null
  ? {
      status: RedirectStatus;
      payload?: Nullish<T>;
    }
  : {
      status: RedirectStatus;
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
  ? ReturnData<WithId<U>>
  : never;

export type DataFromPromiseWithoutId<
  T extends PromiseReturnData<Entity>
> = T extends PromiseReturnData<infer U>
  ? ReturnData<WithoutId<U>>
  : never;

export type ReturnMessageKey<
  T extends string = string
> = `${T}_${Status}`;
// #endregion

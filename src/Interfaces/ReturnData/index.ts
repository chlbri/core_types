import { WithId } from "../../entities";
import { WithoutId } from "../../entities/WithoutId";
import { Status } from "../../status";
import { ClientErrorData } from "./ClientError";
import { InformationData } from "./Information";
import { PermissionErrorData } from "./Permission";
import { RedirectData } from "./Redirect";
import { ServerErrorData } from "./ServerError";
import { SuccessData } from "./Success";
import { TimeOutErrorData } from "./TimeOutError";

export * from "./ClientError";
export * from "./Information";
export * from "./Permission";
export * from "./Redirect";
export * from "./ServerError";
export * from "./Success";
export * from "./TimeOutError";

export type ErrorData =
  | ClientErrorData
  | ServerErrorData
  | PermissionErrorData
  | TimeOutErrorData;

export type ResolveData<T = any> =
  | InformationData<T>
  | SuccessData<T>
  | RedirectData<T>;

export type ReturnData<T = any> = ResolveData<T> | ErrorData;

export type PromiseReturnData<T = any> = Promise<ReturnData<T>>;

export type DataFromPromiseWithId<T extends PromiseReturnData> =
  T extends PromiseReturnData<infer U>
    ? U extends any[]
      ? ReturnData<WithId<U[number]>[]>
      : ReturnData<WithId<U>>
    : never;

export type DataFromPromiseWithoutId<T extends PromiseReturnData> =
  T extends PromiseReturnData<infer U>
    ? U extends any[]
      ? ReturnData<WithoutId<U[number]>[]>
      : ReturnData<WithoutId<U>>
    : never;

export type ReturnMessageKey<T extends string = string> = `${T}_${Status}`;

import { Actor, Entity } from "../../entities";
import { NExtract, NOmit } from "../../types";
import { IDAO } from "../DAO";
import { ReturnData } from "../ReturnData";

export type LogDatAction = keyof IDAO;

export type LogAuthAction = "signIn" | "signUp" | "signOut";

export type LogDUpdate<
  T extends Entity = Entity,
  K extends (keyof T)[] = (keyof T)[]
> = {
  actor: Actor;
  action: NExtract<
    LogDatAction,
    | "bulkUpdate"
    | "updateOne"
    | "updateMany"
    | "updateOneById"
    | "updateManyByIds"
  >;
  table: string;
  updated: K;
} & ReturnData<[Pick<T, K[number] | "_id">, Pick<T, K[number] | "_id">]>;

export type LogDCreate = {
  actor: Actor;
  table: string;
  action: NExtract<LogDatAction, "createOne" | "createMany" | "upsertOne">;
} & ReturnData<string>;

export type LogDRead<T = any> = {
  actor: Actor;
  table: string;
  action: NExtract<LogDatAction, "createOne" | "createMany" | "upsertOne">;
} & ReturnData<string>;


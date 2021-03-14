import { Entity, WithId, WithoutId } from "../entities";
import { PromiseReturnData } from "./ReturnData";

export interface IRepo<T extends Entity> {
  create: (value: T) => PromiseReturnData<T>;

  createMany: (...values: T[]) => PromiseReturnData<T[]>;

  upsert: (value: WithId<Partial<T>>) => PromiseReturnData<T>;

  read: (value?: T, limit?: number) => PromiseReturnData<T[]>;

  readOne: (value: T) => PromiseReturnData<T>;

  update: (
    oldValue: T,
    newValue: WithoutId<Partial<T>>
  ) => PromiseReturnData<T>;

  updateMany: (
    oldValue: T,
    newValue: WithoutId<Partial<T>>
  ) => PromiseReturnData<T[]>;

  delete: (value: T) => PromiseReturnData<T>;
}

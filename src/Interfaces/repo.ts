import { Entity, WithId, WithoutId } from "../entities";
import { PromiseReturnData } from "./ReturnData";

export interface IRepo<T extends Entity> {
  create: (value: T) => PromiseReturnData<WithId<T>>;

  createMany: (...values: T[]) => PromiseReturnData<WithId<T>[]>;

  upsert: (value: WithId<Partial<T>>) => PromiseReturnData<WithId<T>>;

  read: (value?: T, limit?: number) => PromiseReturnData<WithId<T>[]>;

  readMany: (...ids: any[]) => PromiseReturnData<WithId<T>[]>;

  readOne: (value: T) => PromiseReturnData<WithId<T>>;

  update: (
    oldValue: T,
    newValue: WithoutId<Partial<T>>
  ) => PromiseReturnData<WithId<T>>;

  updateMany: (
    oldValue: T,
    newValue: WithoutId<Partial<T>>
  ) => PromiseReturnData<WithId<T>[]>;

  delete: (value: T) => PromiseReturnData<WithId<T>>;
}

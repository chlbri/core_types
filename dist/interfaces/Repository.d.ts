import { Entity, WithId, WithoutId } from "../entities";
import { DataSearchOperations } from "../types";
import { PromiseReturnData } from "./ReturnData";
declare type UpdateMany<T> = {
    search: DataSearchOperations<T>;
    newValue: WithoutId<Partial<T>>;
};
export interface IRepo<T extends Entity> {
    create: (value: T) => PromiseReturnData<WithId<T>>;
    createMany: (...values: T[]) => PromiseReturnData<WithId<T>[]>;
    upsert: (value: WithId<T>) => PromiseReturnData<WithId<T>>;
    read: (search?: DataSearchOperations<T>, limit?: number) => PromiseReturnData<WithId<T>[]>;
    readIds: (ids: any[], search?: DataSearchOperations<WithoutId<T>>, limit?: number) => PromiseReturnData<WithId<T>[]>;
    readOne: (search: DataSearchOperations<T>) => PromiseReturnData<WithId<T>>;
    update: (search: DataSearchOperations<T>, newValue: WithoutId<Partial<T>>) => PromiseReturnData<WithId<T>[]>;
    updateOne: (search: DataSearchOperations<T>, newValue: WithoutId<Partial<T>>) => PromiseReturnData<WithId<T>>;
    updateId: (id: any, newValue: WithoutId<Partial<T>>) => PromiseReturnData<WithId<T>>;
    updateMany: (...changes: UpdateMany<T>[]) => PromiseReturnData<WithId<T>[]>;
    delete: (value: T) => PromiseReturnData<WithId<T>>;
}
export {};

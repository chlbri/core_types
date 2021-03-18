import { Entity, WithId, WithoutId } from "../entities";
import { DataSearchOperations } from "../types";
import { PromiseReturnData } from "./ReturnData";
declare type UpdateHelper<T> = {
    search: DataSearchOperations<T>;
    newValue: WithoutId<Partial<T>>;
};
export interface IRepo<T extends Entity> {
    createOne: (value: T) => PromiseReturnData<WithId<T>>;
    createMany: (...values: T[]) => PromiseReturnData<WithId<T>[]>;
    upsert: (value: WithId<T>) => PromiseReturnData<WithId<T>>;
    readMany: (search?: DataSearchOperations<T>, limit?: number) => PromiseReturnData<WithId<T>[]>;
    readIds: (ids: string[], search?: DataSearchOperations<WithoutId<T>>, limit?: number) => PromiseReturnData<WithId<T>[]>;
    readOne: (search: DataSearchOperations<T>) => PromiseReturnData<WithId<T>>;
    readOneById: (id: string) => PromiseReturnData<WithId<T>>;
    updateOne: (search: DataSearchOperations<T>, newValue: WithoutId<Partial<T>>) => PromiseReturnData<WithId<T>>;
    updateId: (id: string, newValue: WithoutId<Partial<T>>) => PromiseReturnData<WithId<T>>;
    updateMany: (...changes: UpdateHelper<T>[]) => PromiseReturnData<WithId<T>[]>;
    delete: (search: DataSearchOperations<T>) => PromiseReturnData<WithId<T>>;
}
export {};

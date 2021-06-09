import { Entity, WithId, WithoutId } from "../entities";
import { DataSearchOperations } from "../types";
import { WithoutPermissions } from "./../entities/WithoutPermissions";
import { PromiseReturnData as PD } from "./ReturnData";
declare type DSO<T> = DataSearchOperations<WithoutPermissions<T>>;
declare type UpdateHelper<T> = {
    search: DSO<T>;
    newValue: WithoutId<Partial<T>>;
    limit?: number;
};
declare type WI<T> = WithId<WithoutPermissions<T>>;
declare type WO<T> = WithoutId<WithoutPermissions<T>>;
declare type PDP<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<Required<Pick<T, K[number]>>>;
declare type PDPA<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<Required<Pick<T, K[number]>>[]>;
declare type IDs<T extends Entity> = NonNullable<T["_id"]>[];
declare type ID<T extends Entity> = NonNullable<T["_id"]>;
export interface IDAO<T extends Entity = Entity> {
    createOne: (value: WithoutPermissions<T>) => PD<string>;
    createMany: (values: WO<T>[]) => PD<string[]>;
    upsertOne: (value: WI<T>) => PD<string>;
    readOne: <K extends (keyof T)[] = (keyof T)[]>(search: DSO<T>, projection?: K) => PDP<T, K>;
    readOneById: <K extends (keyof T)[] = (keyof T)[]>(_id: ID<T>, projection?: K) => PDP<T, K>;
    readMany: <K extends (keyof T)[] = (keyof T)[]>(search?: DSO<T>, options?: {
        projection?: K;
        limit?: number;
    }) => PDPA<T, K>;
    readManyByIds: <K extends (keyof T)[] = (keyof T)[]>(ids: IDs<T>, options?: {
        projection?: K;
        limit?: number;
        search?: DSO<T>;
    }) => PDPA<T, K>;
    count: (search?: DSO<T>) => PD<number>;
    updateOne: (search: DSO<T>, newValue: WO<Partial<T>>) => PD<string>;
    updateOneById: (_id: ID<T>, newValue: WO<Partial<T>>) => PD<string>;
    updateMany: (search: DSO<T>, newValue: WO<Partial<T>>, limit?: number) => PD<string[]>;
    updateManyByIds: (ids: IDs<T>, newValue: WO<Partial<T>>, options?: {
        search?: DSO<T>;
        limit?: number;
    }) => PD<string[]>;
    bulkUpdate: (updates: UpdateHelper<T>[]) => PD<string[]>;
    deleteOne: (search: DSO<T>) => PD<string>;
    deleteOneById: (_id: ID<T>) => PD<string>;
    deleteMany: (search: DSO<T>, limit?: number) => PD<string[]>;
    deleteManyByIds: (ids: IDs<T>, options?: {
        search?: DSO<T>;
        limit?: number;
    }) => PD<string[]>;
}
export {};

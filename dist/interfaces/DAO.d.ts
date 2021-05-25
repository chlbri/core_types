import { Entity, WithId, WithoutId } from "../entities";
import { DataSearchOperations, NOmit } from "../types";
import { WithoutPermissions } from "./../entities/WithoutPermissions";
import { PromiseReturnData as PD } from "./ReturnData";
declare type DSO<T> = DataSearchOperations<WithoutPermissions<T>>;
declare type UpdateHelper<T> = {
    search: DSO<T>;
    newValue: WithoutId<Partial<T>>;
};
declare type WI<T> = WithId<WithoutPermissions<T>>;
declare type WO<T> = WithoutId<WithoutPermissions<T>>;
declare type PDP<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<Required<NOmit<T, K[number]>>>;
declare type PDPA<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<Required<NOmit<T, K[number]>>[]>;
export interface IDAO<T extends Entity = Entity> {
    createOne: (value: WithoutPermissions<T>) => PD<string>;
    createMany: (values: WO<T>[]) => PD<string[]>;
    upsertOne: (value: WI<T>) => PD<string>;
    readMany: <K extends (keyof T)[] = (keyof T)[]>(search?: DSO<T>, options?: {
        projection?: K;
        limit?: number;
    }) => PDPA<T, K>;
    count: (search?: DSO<T>) => PD<number>;
    readManyByIds: <K extends (keyof T)[] = (keyof T)[]>(ids: string[], options?: {
        projection?: K;
        limit?: number;
        serach: DSO<T>;
    }) => PDPA<T, K>;
    readOne: <K extends (keyof T)[] = (keyof T)[]>(search: DSO<T>, projection?: K) => PDP<T, K>;
    readOneById: <K extends (keyof T)[] = (keyof T)[]>(_id: string, projection?: K) => PDP<T, K>;
    updateOne: (search: DSO<T>, newValue: WO<Partial<T>>) => PD<string>;
    updateOneById: (_id: string, newValue: WO<Partial<T>>) => PD<string>;
    updateMany: (search: DSO<T>, newValue: WO<Partial<T>>, limit?: number) => PD<string[]>;
    updateManyByIds: (ids: string[], newValue: WO<Partial<T>>, options?: {
        search?: DSO<T>;
        limit?: number;
    }) => PD<string[]>;
    bulkUpdate: (updates: UpdateHelper<T>) => PD<string[]>;
    deleteOne: (search: DSO<T>) => PD<string>;
    deleteOneById: (search: string) => PD<string>;
    deleteMany: (search: DSO<T>) => PD<string[]>;
    deleteManyByIds: <A extends string[]>(ids: A, options?: {
        search?: DSO<T>;
        limit?: number;
    }) => PD<string[]>;
}
export {};

import { Actor, Entity, WithId, WithoutId } from '../entities';
import { WithoutPermissions } from '../entities/WithoutPermissions';
import { DataSearchOperations, NOmit } from '../types';
import { IDAO } from './DAO';
import { ILogger } from './Logger';
import { PromiseReturnData as PD } from './ReturnData';
import { PermissionsDAO } from './types';
declare type DSO<T> = DataSearchOperations<WithoutPermissions<T>>;
declare type UpdateHelper<T> = {
    search: DSO<T>;
    newValue: WithoutId<Partial<T>>;
};
declare type WI<T> = WithId<WithoutPermissions<T>>;
declare type WO<T> = WithoutId<WithoutPermissions<T>>;
declare type PDP<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<Required<NOmit<T, K[number]>>>;
declare type PDPA<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<Required<NOmit<T, K[number]>>[]>;
declare type CreateOneArgs<T extends Entity> = {
    actor: Actor;
    value: T;
};
export declare abstract class IDAOL<T extends Entity> {
    actor: Actor;
    permissions: PermissionsDAO;
    private dao;
    private logger;
    constructor(actor: Actor, permissions: PermissionsDAO, dao: IDAO<T>, logger: ILogger);
    createOne({ actor, value }: CreateOneArgs<T>): void;
    abstract createMany: (values: WO<T>[]) => PD<string[]>;
    abstract upsertOne: (value: WI<T>) => PD<string>;
    abstract readMany: <K extends (keyof T)[] = (keyof T)[]>(search?: DSO<T>, options?: {
        projection?: K;
        limit?: number;
    }) => PDPA<T, K>;
    abstract count: (search?: DSO<T>) => PD<number>;
    abstract readManyByIds: <K extends (keyof T)[] = (keyof T)[]>(ids: string[], options?: {
        projection?: K;
        limit?: number;
        serach: DSO<T>;
    }) => PDPA<T, K>;
    abstract readOne: <K extends (keyof T)[] = (keyof T)[]>(search: DSO<T>, projection?: K) => PDP<T, K>;
    abstract readOneById: <K extends (keyof T)[] = (keyof T)[]>(_id: string, projection?: K) => PDP<T, K>;
    abstract updateOne: (search: DSO<T>, newValue: WO<Partial<T>>) => PD<string>;
    abstract updateOneById: (_id: string, newValue: WO<Partial<T>>) => PD<string>;
    abstract updateMany: (search: DSO<T>, newValue: WO<Partial<T>>, limit?: number) => PD<string[]>;
    abstract updateManyByIds: (ids: string[], newValue: WO<Partial<T>>, options?: {
        search?: DSO<T>;
        limit?: number;
    }) => PD<string[]>;
    abstract bulkUpdate: (updates: UpdateHelper<T>) => PD<string[]>;
    abstract deleteOne: (search: DSO<T>) => PD<string>;
    abstract deleteOneById: (search: string) => PD<string>;
    abstract deleteMany: (search: DSO<T>) => PD<string[]>;
    abstract deleteManyByIds: <A extends string[]>(ids: A, options?: {
        search?: DSO<T>;
        limit?: number;
    }) => PD<string[]>;
}
export {};

import { Actor, Entity } from '../../entities';
import { NExtract } from '../../types';
import { IDAO } from '../DAO';
import { ReturnData } from '../ReturnData';
export declare type LogDatAction = keyof IDAO;
export declare type LogAuthAction = 'signIn' | 'signUp' | 'signOut';
export declare type LogDUpdate<T extends Entity = Entity, K extends (keyof T)[] = (keyof T)[]> = {
    actor: Actor;
    action: NExtract<LogDatAction, 'bulkUpdate' | 'updateOne' | 'updateMany' | 'updateOneById' | 'updateManyByIds'>;
    table: string;
    updated: K;
} & ReturnData<[
    Pick<T, K[number] | '_id'>,
    Pick<T, K[number] | '_id'>
]>;
export declare type LogDCreate = {
    actor: Actor;
    table: string;
    action: NExtract<LogDatAction, 'createOne' | 'createMany' | 'upsertOne'>;
} & ReturnData<string>;
export declare type LogDRead<T = any> = {
    actor: Actor;
    table: string;
    action: NExtract<LogDatAction, 'createOne' | 'createMany' | 'upsertOne'>;
} & ReturnData<string>;

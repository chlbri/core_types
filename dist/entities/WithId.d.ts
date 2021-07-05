import { WithoutId } from './WithoutId';
export declare type WithId<T = any> = WithoutId<T> & {
    _id: string;
};
export declare function isWithId(val: any): val is WithId;

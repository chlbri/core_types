import { WithoutId } from "./WithoutId";
export declare type WithId<T> = WithoutId<T> & {
    _id: string;
};

import { SimpleObject } from "../Interfaces";
export interface Entity {
    __name: string;
    _id?: string;
}
export declare type SimpleEntity<T extends Entity> = {
    [K in Exclude<keyof T, "__name" | "_id"> as SimpleObject<T[K]> extends never ? never : K]: SimpleObject<T[K]>;
};
/**
 * Implementation
 */

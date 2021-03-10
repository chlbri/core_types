import { SimpleObject } from "../interfaces";

export interface Entity {
  _id?: string;
}

export type SimpleEntity<T extends Entity> = {
  [K in Exclude<keyof T, "_id"> as SimpleObject<
    T[K]
  > extends never
    ? never
    : K]: SimpleObject<T[K]>;
};

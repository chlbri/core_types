import { SimpleObject } from "../interfaces";

export interface Entity {
  __name: string;
  _id?: string;
}

export type SimpleEntity<T extends Entity> = {
  [K in Exclude<keyof T, "__name" | "_id"> as SimpleObject<
    T[K]
  > extends never
    ? never
    : K]: SimpleObject<T[K]>;
};

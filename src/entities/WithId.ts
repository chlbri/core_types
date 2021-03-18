import { WithoutId } from "./WithoutId";

export type WithId<T> = WithoutId<T> & { _id: string };

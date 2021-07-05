import { WithoutId } from './WithoutId';

export type WithId<T = any> = WithoutId<T> & { _id: string };

export function isWithId(val: any): val is WithId {
  return Object.keys(val).includes('_id');
}


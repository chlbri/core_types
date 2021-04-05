import { Entity, WithId, WithoutId } from "../entities";
import { DataSearchOperations } from "../types";
import { PromiseReturnData as PD } from "./ReturnData";

type UpdateHelper<T> = {
  search: DataSearchOperations<T>;
  newValue: WithoutId<Partial<T>>;
};

// type UpdateHelperId<T> = {
//   search: string;
//   newValue: WithoutId<Partial<T>>;
// };

type PRD<T> = PD<WithId<T>>;
type PRDM<T> = PD<WithId<T>[]>;

export interface IRepo<T extends Entity> {
  createOne: (value: T) => PRD<T>;

  createMany: (values: WithoutId<T>[]) => PRDM<T>;

  upsertOne: (value: WithId<T>) => PRD<T>;

  readMany: (
    search?: DataSearchOperations<T>,
    limit?: number
  ) => PRDM<T>;

  count: (search?: DataSearchOperations<T>) => PD<number>;

  readManyByIds: (
    ids: string[],
    search?: DataSearchOperations<WithoutId<T>>,
    limit?: number
  ) => PRDM<T>;

  readOne: (search: DataSearchOperations<T>) => PRD<T>;

  readOneById: (_id: string) => PRD<T>;

  updateOne: (
    search: DataSearchOperations<T>,
    newValue: WithoutId<Partial<T>>
  ) => PRD<T>;

  updateOneById: (
    _id: string,
    newValue: WithoutId<Partial<T>>
  ) => PRD<T>;

  updateMany: (
    search: DataSearchOperations<T>,
    newValue: WithoutId<Partial<T>>,
    limit?: number | undefined
  ) => PRDM<T>;

  updateManyByIds: (
    ids: string[],
    newValue: WithoutId<Partial<T>>,
    options?: {
      search?: DataSearchOperations<T>;
      limit?: number;
    }
  ) => PRDM<T>;

  deleteOne: (search: DataSearchOperations<T>) => PRD<T>;

  deleteOneById: (search: string) => PRD<T>;

  deleteMany: (search: DataSearchOperations<T>) => PRDM<T>;

  deleteManyByIds: <A extends string[]>(
    ids: A,
    options?: {
      search?: DataSearchOperations<T>;
      limit?: number;
    }
  ) => PRDM<T>;
}

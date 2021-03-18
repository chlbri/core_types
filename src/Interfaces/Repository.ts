import { Entity, WithId, WithoutId } from "../entities";
import { DataSearchOperations, LengthOf, TupleOf } from "../types";
import { PromiseReturnData } from "./ReturnData";

type UpdateHelper<T> = {
  search: DataSearchOperations<T>;
  newValue: WithoutId<Partial<T>>;
};

// type UpdateHelperId<T> = {
//   search: string;
//   newValue: WithoutId<Partial<T>>;
// };

type PRD<T> = PromiseReturnData<WithId<T>>;
type PRDM<T> = PromiseReturnData<WithId<T>[]>;

export interface IRepo<T extends Entity> {
  createOne: (value: WithoutId<T>) => PRD<T>;

  createMany: (...values: WithoutId<T>[]) => PRDM<T>;

  upsertOne: (value: WithId<T>) => PRD<T>;

  upsertMany: (...values: WithId<T>[]) => PRDM<T>;

  readMany: (
    search?: DataSearchOperations<T>,
    limit?: number
  ) => PRDM<T>;

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

  updateMany: (...changes: UpdateHelper<T>[]) => PRDM<T>;

  updateManyByIds: (
    _ids: string[],
    changes: UpdateHelper<T>[]
  ) => PRDM<T>;

  deleteOne: (search: DataSearchOperations<T>) => PRD<T>;

  deleteOneById: (search: string) => PRD<T>;

  deleteMany: (search: DataSearchOperations<T>) => PRDM<T>;

  deleteManyByIds: <A extends string[]>(
    _ids: A,
    search: DataSearchOperations<T>
  ) => PRDM<T>;
}

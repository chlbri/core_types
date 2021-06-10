import { Actor, Entity, WithId, WithoutId } from "../entities";
import { WithoutPermissions } from "../entities/WithoutPermissions";
import { DataSearchOperations, NOmit } from "../types";
import { IDAO } from "./DAO";
import { ILogger } from "./Logger";
import { PromiseReturnData as PD, ReturnData as RD } from "./ReturnData";
import { PermissionsDAO } from "./types";

type DSO<T> = DataSearchOperations<WithoutPermissions<T>>;

type UpdateHelper<T> = {
  search: DSO<T>;
  newValue: WithoutId<Partial<T>>;
};

type WI<T> = WithId<WithoutPermissions<T>>;
type WO<T> = WithoutId<WithoutPermissions<T>>;

type PDP<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<
  Required<NOmit<T, K[number]>>
>;
type PDPA<T extends Entity, K extends (keyof T)[] = (keyof T)[]> = PD<
  Required<NOmit<T, K[number]>>[]
>;

// type UpdateHelperId<T> = {
//   search: string;
//   newValue: WithoutId<Partial<T>>;
// };

type CreateOneArgs<T extends Entity> = {
  actor: Actor;
  value: T;
};

export abstract class IDAOL<T extends Entity> {
  constructor(
    public actor: Actor,
    public permissions: PermissionsDAO,
    private dao: IDAO<T>,
    private logger: ILogger
  ) {}

  createOne({ actor, value }: CreateOneArgs<T>) {
    let data = { status: 301 } as RD<string>;
  }

  abstract createMany: (values: WO<T>[]) => PD<string[]>;

  abstract upsertOne: (value: WI<T>) => PD<string>;

  abstract readMany: <K extends (keyof T)[] = (keyof T)[]>(
    search?: DSO<T>,
    options?: {
      projection?: K;
      limit?: number;
    }
  ) => PDPA<T, K>;

  abstract count: (search?: DSO<T>) => PD<number>;

  abstract readManyByIds: <K extends (keyof T)[] = (keyof T)[]>(
    ids: string[],
    options?: {
      projection?: K;
      limit?: number;
      serach: DSO<T>;
    }
  ) => PDPA<T, K>;

  abstract readOne: <K extends (keyof T)[] = (keyof T)[]>(
    search: DSO<T>,
    projection?: K
  ) => PDP<T, K>;

  abstract readOneById: <K extends (keyof T)[] = (keyof T)[]>(
    _id: string,
    projection?: K
  ) => PDP<T, K>;

  abstract updateOne: (
    search: DSO<T>,
    newValue: WO<Partial<T>>
  ) => PD<string>;

  abstract updateOneById: (
    _id: string,
    newValue: WO<Partial<T>>
  ) => PD<string>;

  abstract updateMany: (
    search: DSO<T>,
    newValue: WO<Partial<T>>,
    limit?: number
  ) => PD<string[]>;

  abstract updateManyByIds: (
    ids: string[],
    newValue: WO<Partial<T>>,
    options?: {
      search?: DSO<T>;
      limit?: number;
    }
  ) => PD<string[]>;

  abstract bulkUpdate: (updates: UpdateHelper<T>) => PD<string[]>;

  abstract deleteOne: (search: DSO<T>) => PD<string>;

  abstract deleteOneById: (search: string) => PD<string>;

  abstract deleteMany: (search: DSO<T>) => PD<string[]>;

  abstract deleteManyByIds: <A extends string[]>(
    ids: A,
    options?: {
      search?: DSO<T>;
      limit?: number;
    }
  ) => PD<string[]>;
}

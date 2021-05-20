import { AddString } from "../types";
import { IUseCase } from "./IUseCase";

type _SetEntityForDatabase<
  T,
  K extends keyof T,
  Before extends string = "",
  After extends string = ""
> = {
  [key in T[K] as AddString<key, Before, After>]: T[];
};

type _SetEntityForUseCase<
  T,
  K extends keyof T,
  Before extends string = "",
  After extends string = ""
> = {
  [key in T[K] as AddString<key, Before, After>]: T;
};

type _ReadAU = ReadonlyArray<unknown>;

export type CoreDataBaseSchema<
  T extends _ReadAU,
  K extends keyof T[number],
  Before extends string = "",
  After extends string = "s"
> = T extends [infer T1, ...infer U1]
  ? U1[0] extends undefined
    ? _SetEntityForDatabase<T1, K, Before, After>
    : U1 extends _ReadAU
    ? _SetEntityForDatabase<T1, K, Before, After> &
        CoreDataBaseSchema<U1, K, Before, After>
    : never
  : never;

export type DomainUseCaseSchema<
  T extends _ReadAU,
  K extends keyof T[number],
  Before extends string = "",
  After extends string = ""
> = T extends [infer T1, ...infer U1]
  ? U1[0] extends undefined
    ? _SetEntityForUseCase<T1, K, Before, After>
    : U1 extends _ReadAU
    ? _SetEntityForUseCase<T1, K, Before, After> &
        DomainUseCaseSchema<U1, K, Before, After>
    : never
  : {
      [key: string]: T[number];
    };

export type Domain<T extends IUseCase[] = IUseCase[]> =
  DomainUseCaseSchema<T, "__name">;

export function useCase<
  D extends Domain,
  K extends keyof D = keyof D
>(domain: D, use: K): D[K]["call"] {
  return domain[use].call;
}

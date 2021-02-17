import { DomainUseCaseSchema } from "../helpers/types";
import { IUseCase } from "./IUseCase";
declare type ActivityDomain<T extends IUseCase[] = IUseCase[]> = DomainUseCaseSchema<T, "__name">;
declare function useCaseFromDomain<D extends ActivityDomain, K extends keyof D>(domain: D, useCase: K): D[K]["call"];
export { ActivityDomain, useCaseFromDomain };

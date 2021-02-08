import { DomainUseCaseSchema } from "../Types";
import { IUseCase } from "./IUseCase";

type ActivityDomain<
  T extends IUseCase[] = IUseCase[]
> = DomainUseCaseSchema<T, "__name">;

function useCaseFromDomain<
  D extends ActivityDomain,
  K extends keyof D
>(domain: D, useCase: K): D[K]["call"] {
  return domain[useCase].call;
}

export { ActivityDomain, useCaseFromDomain };

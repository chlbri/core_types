import { DomainUseCaseSchema } from ".";
import { IUseCase } from "./IUseCase";

type Domain<T extends IUseCase[] = IUseCase[]> = DomainUseCaseSchema<
  T,
  "__name"
>;

function useCase<D extends Domain, K extends keyof D>(
  domain: D,
  useCase: K
): D[K]["call"] {
  return domain[useCase].call;
}

export { Domain, useCase };

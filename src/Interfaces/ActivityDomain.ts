import { DomainUseCaseSchema } from "../types";
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

// class MyCase implements IUseCase{
//   call: any;
//   readonly __name = 'mycase';

// }

// const mycase = new MyCase();

// const domain : ActivityDomain<[MyCase]> = {
//   mycase
// }

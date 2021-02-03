import { DomainUseCaseSchema } from "../types";
import IUseCase from "./IUseCase";

type ActivityDomain<T extends IUseCase[] = IUseCase[]> = DomainUseCaseSchema<
  T,
  "__name"
>;

export default ActivityDomain;

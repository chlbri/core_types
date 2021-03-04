import { ExceptionStatus, EXCEPTION_CODES } from "../status";

export interface IException<
  T extends ExceptionStatus = ExceptionStatus
> {
  readonly statut: T;
}

export class Exception<T extends ExceptionStatus = ExceptionStatus>
  implements IException<T> {
  constructor(public readonly statut: T) {}
  toString(): string {
    return `Exception ==> { statut: ${this.statut}}`;
  }
}

type ExceptionObject = {
  [key in ExceptionStatus]?: Exception;
};

export const EXCEPTIONS = EXCEPTION_CODES.reduce<ExceptionObject>(
  (acc, curr) => (
    (acc[`${curr}` as const] = new Exception(curr)), acc
  ),
  {}
) as Required<ExceptionObject>;

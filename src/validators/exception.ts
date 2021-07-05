import { ExceptionStatus, EXCEPTION_CODES } from '../status';

export interface IException<
  T extends ExceptionStatus = ExceptionStatus,
> {
  readonly status: T;
}

export class Exception<
  T extends ExceptionStatus = ExceptionStatus,
> implements IException<T>
{
  constructor(public readonly status: T) {}
}

type ExceptionObject = {
  [key in ExceptionStatus]?: Exception;
};

export const EXCEPTIONS: {
  [key in ExceptionStatus]: Exception;
} = EXCEPTION_CODES.reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: new Exception(curr),
  }),
  {} as ExceptionObject,
) as Required<ExceptionObject>;

const ert = EXCEPTIONS[404]; /* as Required<ExceptionObject> */

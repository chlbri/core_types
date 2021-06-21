import { CLIENT_ERROR_STATUS } from './client';
import { INFORMATION_STATUS } from './information';
import { PERMISSION_DENIED_STATUS } from './permission';
import { REDIRECT_STATUS } from './redirect';
import { SERVER_ERROR_STATUS } from './server';
import { SUCCESSFULL_STATUS } from './successfull';
import { TIMEOUT_ERROR_STATUS } from './timeout';
import { isN } from './_';

export const EXCEPTION_CODES = [
  ...CLIENT_ERROR_STATUS,
  ...SERVER_ERROR_STATUS,
  ...PERMISSION_DENIED_STATUS,
  ...TIMEOUT_ERROR_STATUS,
] as const;

export const STATUS_CODES = [
  ...INFORMATION_STATUS,
  ...SUCCESSFULL_STATUS,
  ...REDIRECT_STATUS,
  ...EXCEPTION_CODES,
] as const;

export type Status = typeof STATUS_CODES[number];

export type ExceptionStatus = typeof EXCEPTION_CODES[number];

export function isStatus(val: number): val is Status {
  return isN(STATUS_CODES, val);
}

export function isStatusException(
  val: number,
): val is ExceptionStatus {
  return isN(EXCEPTION_CODES, val);
}

export * from './client';
export * from './information';
export * from './permission';
export * from './redirect';
export * from './server';
export * from './successfull';
export * from './timeout';



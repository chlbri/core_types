import { CLIENT_ERROR_STATUS } from "./client";
import { INFORMATION_STATUS } from "./information";
import { REDIRECT_STATUS } from "./redirect";
import { SERVER_ERROR_STATUS } from "./server";
import { SUCCESSFULL_STATUS } from "./successfull";
import { isN } from "./_";

export const EXCEPTION_CODES = [
  ...REDIRECT_STATUS,
  ...CLIENT_ERROR_STATUS,
  ...SERVER_ERROR_STATUS,
] as const;

export const STATUS_CODES = [
  ...SUCCESSFULL_STATUS,
  ...INFORMATION_STATUS,
  ...EXCEPTION_CODES,
] as const;

export type Status = typeof STATUS_CODES[number];

export type ExceptionStatus = typeof EXCEPTION_CODES[number];

export function isStatus(val: number): val is Status {
  return isN(STATUS_CODES, val);
}

export * from "./client";
export * from "./information";
export * from "./redirect";
export * from "./server";
export * from "./successfull";

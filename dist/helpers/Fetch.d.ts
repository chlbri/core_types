declare const Fetch: {
    readonly 204: "MATCHED";
    readonly 200: "COMPLETED";
    readonly 300: "FAIL";
    readonly 404: "ERROR";
    readonly 500: "CONNECTIONFAILED";
};
declare type FetchStatus = keyof typeof Fetch;
declare type FetchResponses = typeof Fetch[FetchStatus];
declare function isGood(arg: FetchStatus): boolean;
declare function isFetchStatus(arg: number | string): arg is FetchStatus;
declare function isBad(arg: FetchStatus): boolean;
export { Fetch, FetchStatus, FetchResponses, isGood, isBad, isFetchStatus };

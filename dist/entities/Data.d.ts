import { AtomicData } from "./AtomicData";
/**
 * SIgnature only
 */
export declare type Data<T extends string> = {
    [key in T]: AtomicData;
};

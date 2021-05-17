import { Actor } from "../../entities";
import { ReturnData } from "../ReturnData";
export declare type Log<T = any> = {
    actor: Actor;
    ids: string[];
    action: LogDatAction;
} & ReturnData<T>;
export declare type LogDatAction = "create_one" | "read_one" | "create_many" | "read_many" | "update_one" | "update_many" | "delete_one" | "delete_many";
export declare type LogAuthAction = "signIn" | "signUp" | "signOut";

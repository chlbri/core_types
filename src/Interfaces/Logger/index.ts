import { Actor } from "../../entities";
import { LogAuthAction, LogDatAction } from "./types";

// type UpdateHelperId<T> = {
//   search: string;
//   newValue: WithoutId<Partial<T>>;
// };

export interface ILogger {
  dataLog: (table: string, data: any) => void;
  authLog: (_id: string, action: LogAuthAction) => void;
  adminLog: (actor: Actor, action: LogDatAction) => void;
}

import { Entity } from "./Entity";

export interface Human extends Entity {
  firstNames: string;
  lastName: string;
}

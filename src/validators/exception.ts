import { InformationStatus, Status, SuccesfullStatus } from "..";

type ST = Exclude<Status, SuccesfullStatus | InformationStatus>;

class Exception<T extends ST = ST> {
  constructor(public readonly statut: T) {}
}

export { Exception };

import { NUMBERS, STRINGS } from "../../Constants";

class Exception {
  constructor(
    public readonly statut: number,
    public readonly message: string
  ) {}
}

export { Exception };

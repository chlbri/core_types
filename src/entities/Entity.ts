import {
  Exception,
  SimpleObject,
  Validator,
  ValueObject,
} from "../Interfaces";

export interface Entity {
  __name: string;
  _id?: string;
}

export type SimpleEntity<T extends Entity> = {
  [K in Exclude<keyof T, "__name" | "_id"> as SimpleObject<
    T[K]
  > extends never
    ? never
    : K]: SimpleObject<T[K]>;
};

// #region Implémentation
/**
 * Implementation
 */
// class LKValidators extends Validator<string[]> {
//   constructor() {
//     super((args) => args.length >= 0, new Exception(456, ""));
//   }
// }

// export class LinkedPhotosVO extends ValueObject<string[]> {
//   constructor(...args: string[]) {
//     super(args, [new LKValidators()]);
//   }
// }

// class NEntity implements Entity {
//   readonly __name = "nentity";
//   _id?: string | undefined;
//   toto?: number | undefined; //
//   tatie = () => 7;
//   constructor(public linkedPhotos: LinkedPhotosVO) {}
// }

// const var1 = {};

// const v2 = "swin" in var1;

// console.log("====================================");
// console.log(v2);
// console.log("====================================");

// type T5 = SimpleEntity<NEntity>;

// #endregion
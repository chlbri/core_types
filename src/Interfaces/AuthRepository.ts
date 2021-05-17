import { WithPassword } from "../entities";
import { PromiseReturnData as PD } from "./ReturnData";

export interface IAuthRepo1<User> {
  signIn: (...args: string[]) => PD<User>;
  signUp: (...args: string[]) => PD<User>;
  currentUser: User;
}

export interface IAuthRepo2<User> {
  requestCode: (login: string) => PD<WithPassword<User>>;
  signIn: (...args: string[]) => PD<User>;
  currentUser: User;
}

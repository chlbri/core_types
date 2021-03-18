import { WithPassword } from "../entities";
import { PromiseReturnData } from "./ReturnData";
export interface IAuthRepo<User> {
    signIn: (...args: string[]) => PromiseReturnData<User>;
    signUp: (...args: string[]) => PromiseReturnData<User>;
    currentUser: User;
}
export interface IAuthRepo2<User> {
    requestCode: (login: string) => PromiseReturnData<WithPassword<User>>;
    signIn: (...args: string[]) => PromiseReturnData<User>;
    currentUser: User;
}

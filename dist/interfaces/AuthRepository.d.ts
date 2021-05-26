import { PromiseReturnData as PD } from "./ReturnData";
declare type User = {
    id?: string;
    expirationLocal?: Date;
    expirationOnline?: Date;
};
export interface IAuthRepo {
    currentUserID: User;
    signInWithEmailAndPassword: (email: string, password: string) => PD<User>;
    signUpWithEmailAndPassword: (email: string, password: string, ...data: any[]) => PD<User>;
    signWithEmail: (email: string, code: any) => PD<User>;
    signWithWhatsApp: (phoneNumber: string, code: any) => PD<User>;
    signWithPhoneNumber: (phoneNumber: string, code: any) => PD<User>;
    signWithFacebook: (tokens: any) => PD<User>;
    signWithGithub: (tokens: any) => PD<User>;
    signWithAppleID: (tokens: any) => PD<User>;
    signWithGoogle: (tokens: any) => PD<User>;
    signWithTwitter: (tokens: any) => PD<User>;
    signInAnonymously: () => PD<User>;
    signOut: () => PD<true>;
}
export {};

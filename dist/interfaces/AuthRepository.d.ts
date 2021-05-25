import { PromiseReturnData as PD } from "./ReturnData";
export interface IAuthRepo {
    currentUserID: string;
    signInWithEmailAndPassword: (email: string, password: string) => PD<string>;
    signUpWithEmailAndPassword: (email: string, password: string, ...data: any[]) => PD<string>;
    signWithEmail: (email: string, code: any) => PD<string>;
    signWithWhatsApp: (phoneNumber: string, code: any) => PD<string>;
    signWithPhoneNumber: (phoneNumber: string, code: any) => PD<string>;
    signWithFacebook: (tokens: any) => PD<string>;
    signWithGithub: (tokens: any) => PD<string>;
    signWithAppleID: (tokens: any) => PD<string>;
    signWithGoogle: (tokens: any) => PD<string>;
    signWithTwitter: (tokens: any) => PD<string>;
    signInAnonymously: () => PD<string>;
    signOut: () => PD<true>;
}

import { WithPassword } from "../entities";
import { PromiseReturnData as PD } from "./ReturnData";

export interface IAuthRepo {
  currentUserID: string;
  signInWithEmailAndPassword: (email: string, password: string) => PD<string>;
  signUpWithEmailAndPassword: (
    email: string,
    password: string,
    ...data: any[]
  ) => PD<string>;
  signWithEmail: (email: string, code: any) => PD<string>;
  signWithWhatsApp: (phoneNumber: string, code: any) => PD<string>;
  signWithPhoneNumber: (phoneNumber: string, code: any) => PD<string>;
  // TODO : Search for tokens required for Facebook
  signWithFacebook: (tokens: any) => PD<string>;
  // TODO : Search for tokens required for Github
  signWithGithub: (tokens: any) => PD<string>;
  // TODO : Search for tokens required for AppleID
  signWithAppleID: (tokens: any) => PD<string>;
  // TODO : Search for tokens required for Google OAuth
  signWithGoogle: (tokens: any) => PD<string>;
  // TODO : Search for tokens required for Twitter
  signWithTwitter: (tokens: any) => PD<string>;
  // TODO : Search how to do it!
  signInAnonymously: () => PD<string>;
  signOut: () => PD<true>;
}

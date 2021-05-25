import { WithPassword } from "../entities";
import { PromiseReturnData as PD } from "./ReturnData";

export interface IAuthRepo<User> {
  currentUser: User;
  signInWithEmailAndPassword: (email: string, password: string) => PD<User>;
  signUpWithEmailAndPassword: (
    email: string,
    password: string,
    ...data: any[]
  ) => PD<User>;
  signWithEmail: (email: string, code: any) => PD<User>;
  signWithWhatsApp: (phoneNumber: string, code: any) => PD<User>;
  signWithPhoneNumber: (phoneNumber: string, code: any) => PD<User>;
  // TODO : Search for tokens required for Facebook
  signWithFacebook: (tokens: any) => PD<User>;
  // TODO : Search for tokens required for Github
  signWithGithub: (tokens: any) => PD<User>;
  // TODO : Search for tokens required for AppleID
  signWithAppleID: (tokens: any) => PD<User>;
  // TODO : Search for tokens required for Google OAuth
  signWithGoogle: (tokens: any) => PD<User>;
  // TODO : Search for tokens required for Twitter
  signWithTwitter: (tokens: any) => PD<User>;
  // TODO : Search how to do it!
  signInAnonymously: () => PD<User>;
}

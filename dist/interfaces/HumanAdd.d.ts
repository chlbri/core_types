import Human from "./Human";
export default interface HumanAdd extends Human {
    bio: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

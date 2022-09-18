export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean;
    toJSON(): IUser;
}
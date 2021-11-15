import { insertAccount } from "../dataAccess/accountDAO";

export const registerAccount = (username: string, password: string) => {
    insertAccount(username, password);
}
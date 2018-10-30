import { Token } from "./Token";

export interface User {
    username: string,
    password: string,
    token: Token
}
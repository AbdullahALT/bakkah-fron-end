import { Observable } from "rxjs";
import { Token } from "../entities/Token";
import { users } from "./users";

class Authentication {
    constructor(){

    }

    login = (username: string, password: string): Observable<Token> => {
        const observe = new Observable<Token>((observer) => {
            setTimeout(() => {
                for(let user of users){
                    if(user.username == username && user.password == password)
                        observer.next(user.token);
                }
                observer.error("No user found :(")
            }, 1000)

        });
        return observe;
    }

}

export default Authentication;
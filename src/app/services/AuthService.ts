import * as moment from "moment";
import { Injectable } from "@angular/core";
import { Token } from "../entities/Token";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Observable } from "rxjs";
import Authentication from "../api/authentication";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(email:string, password:string ): Observable<Token> {
        // return this.http.post<User>('/api/login', {email, password})
        //     .do(res => this.setSession) 
            ////.shareReplay();
        // return {
        //     idToken: "353454354354353453",
        //     expiresIn: 1504699256
        // }
        // const observe = new Observable<Token>((observer) => {
        //     setTimeout(() => {
        //         observer.next({
        //             id: "353454354354353453",
        //             expiresIn: 1504699256
        //         })
        //     }, 1000)

        // });

        // return observe;
        let auth = new Authentication();
        return auth.login(email, password);
    }
          
    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
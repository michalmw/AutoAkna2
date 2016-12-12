import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  isLoggedIn: boolean = true;

  redirectUrl: string;

  login() {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }


}

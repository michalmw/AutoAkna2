import { Injectable } from '@angular/core';

import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

import { LoginService } from './login/login.service';
@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     let url: string = state.url;
     return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if(this.loginService.isLoggedIn)
      return true;

    this.loginService.redirectUrl = url;

    this.router.navigateByUrl('/login');
    return false;
  }
}

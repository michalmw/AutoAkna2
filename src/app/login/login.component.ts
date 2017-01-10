import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { Router } from '@angular/router';
import { User } from '../users/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public alerts:Array<Object> = []; 
  user: User[] = [];


  constructor(
    private loginService:LoginService,
    private router: Router) { }

  ngOnInit() {
    if(this.loginService.isLoggedIn)
      this.router.navigate(['/user', localStorage.getItem('id')]);
  }

  login(user: User) {
    this.loginService.login();
    localStorage.setItem('id', user._id);
    localStorage.setItem('Imie', user.name + ' ' + user.surname);
    this.router.navigate(['/user', user._id]);
  }


  mainLogin(user: User) {
    this.alerts = [];
    this.loginService.checkUser(user)
      .subscribe(
        respons => {
            if(respons.user)
              this.checkPassword(user.password, respons)
            else
               this.alerts.push({
                  type: 'danger',
                  msg: 'Zły login'
                });
          }
      )
  }

  checkPassword(password: string, isValid: User): any {

    if(password == isValid.password)
      this.login(isValid);
    else {
      this.alerts.push({
        type: 'danger',
        msg: 'To hasło jest złe...'
      });
    }

  }
}

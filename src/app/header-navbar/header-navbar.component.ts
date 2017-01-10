import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  public status:{isopen:boolean, isopenCourses: boolean} = {isopen: false, isopenCourses: false};

  constructor(
    private loginService:LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(['/login']);

  }

}

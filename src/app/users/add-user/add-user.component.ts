import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  errorMessage: string;
  user: User;

  constructor(private usersService: UsersService,
  private router: Router) { }

  ngOnInit() {
    this.user;
  }

  add(user: User) {
    this.usersService
      .addUser(user)
      .subscribe( 
        resUser => this.router.navigateByUrl('/users'),
        error => this.errorMessage = <any>error
      );
  }

}

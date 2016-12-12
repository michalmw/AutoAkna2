import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

import { User } from '../user';
import { Inspektorat } from '../inspektorat/inspektorat';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  errorMessage: string;
  users: User[];
  private inspektoraty: Inspektorat[];

  constructor(private usersService: UsersService) { }

 

  getUsers() {
    this.usersService.getUsers()
    .subscribe( 
      users => this.users = users,
      error => this.errorMessage = <any>error
    );
  }

  getInspektoraty() {
    this.usersService.getInspektorat()
      .subscribe(
        inspektoraty => this.inspektoraty = inspektoraty
      )
  }

   ngOnInit(  ) {
     this.getUsers()
     this.getInspektoraty();
  }

  giveNameInspektorat(id) {

    for(let i = 0; i< this.inspektoraty.length; i++) {
      if(id === this.inspektoraty[i]._id)
        return this.inspektoraty[i].name;
    }

    return 'Brak';
  }
}

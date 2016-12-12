import { Component, OnInit } from '@angular/core';

import { Courses } from '../courses';
import { User } from '../../users/user';

import { CoursesService } from '../courses.service'
import { UsersService} from '../../users/users.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  private courses: Courses[];
  private users: User[];
  private errorMessage: string;
  constructor(
    private coursesService: CoursesService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
     this.usersService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      )
      
    this.coursesService.getCourses()
      .subscribe(
        courses => this.courses = courses,
        error => this.errorMessage = <any>error
      )

   
  }

  checkSomethink(id) {
      
      for(let i = 0; i < this.users.length; i++) {
        if(this.users[i]._id === id) {
          return this.users[i].name + ' ' + this.users[i].surname;
        }
      }
      return 'NIe znaleziono uzytkownika';
  }

}

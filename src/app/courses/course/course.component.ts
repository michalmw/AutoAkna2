import { Input, Component, OnInit } from '@angular/core';
import {Courses } from '../courses';
import { User } from '../../users/user';
import { Router, ActivatedRoute } from '@angular/router';

import { CoursesService } from '../courses.service'
import { UsersService } from '../../users/users.service'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  //for Edit Users
  id: any;
  errorMessage: string;
  course: Courses;
  users: User[];
  isEditAble: Boolean = false;

  constructor(
    private coursesService: CoursesService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route
        .params
        .map( params => params['id'])
        .do(id => this.id = id)
        .subscribe(id => {
          this.getUsers()
          if(this.id !== undefined) {
             this.coursesService
              .getCourse(this.id)
              .subscribe(
                course => this.course = course,
                error => this.errorMessage = <any>error
              )
              this.isEditAble = true;
          } else {
            this.course = {
              type: ''
            }
          }
        }
        );


    
   
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
      )
  }
  getCourse() {

      this.coursesService
        .getCourse(this.id)
        .subscribe(
          course => this.course = course,
          error => this.errorMessage = <any>error
        )
  }

  add(course: Courses) {
    if(this.isEditAble) {

      //check is zatwierdzony==status
      if(course.status == 'zatwierdzony' && !course.number)
        this.addNumberCourse(course)
      else
        this.updateCourse(course)


    } else {

      course.status = 'Roboczy';
        this.coursesService
          .addCourse(course)
          .subscribe(
            resUser => this.router.navigateByUrl('/courses'),
            error => this.errorMessage = <any>error
          )
    }
    
  }


  updateCourse(course: Courses) {
    this.coursesService
      .updateCourse(course, this.id)
      .subscribe(
        resCourse => this.router.navigateByUrl('/courses'),
        error => this.errorMessage = <any>error
      )
  }



  addNumberCourse(course: Courses) {
    this.coursesService.checkNumber(course.type)
      .subscribe(
        number => {
          course.number = number.Is +1;
          course.numberYear = new Date().getFullYear();
          this.updateCourse(course);
        }
      )
  }



  isCorrectStatus() {
    if(this.course.status == 'zatwierdzony' 
      || this.course.status == 'zmieniony' 
      || this.course.status == 'zakończony' 
      || this.course.status == 'odwołany')
      return false;
    else
      return true;
  }

}

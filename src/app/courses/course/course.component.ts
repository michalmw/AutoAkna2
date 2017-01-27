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
  userPrivilage :string;

  coursesType = [
    {
      name: '',
      value: '',
      privilege: 'C'
    },
    {
      name: 'KPPP',
      value: 'KPPP',
      privilege: 'A'
    }, {
      name: 'SKPP',
      value: 'SKPP',
      privilage: 'C'
    }, {
      name: '16h',
      value: '16 KPP',
      privilage: 'B'
    }, {
      name: 'WKPP',
      value: 'WKPP',
      privilage: 'B'
    }

  ]

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


    this.userPrivilage = localStorage.getItem('Klasa');
 
   
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

    //Step 1
    // Date Validation
    let dateValidation = this.dateValidation(course);
    if(dateValidation) {
      if(course.numberUser) {
        let isValid = this.checkValidationNumberUser(course.numberUser, course.instructors);
        if(isValid.status === true) {
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
        } else
          alert('Za mało instruktorów na taką licze uczestników');
      }
    } else {
      alert('Coś nie tak z datą.. Uzupełnij ją prawidłowo.');

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


  dateValidation(course: Courses) {
    if(course.type == '16h') {
      if(new Date(course.dateFirstEnd) > new Date(course.dateFirstStart))
        return true;
      else
        return false;
    } else if(course.type == 'WKPP') {
        let dateStart = new Date(course.dateFirstStart);
        let newStartDate = new Date(course.dateFirstStart);
        newStartDate.setDate(newStartDate.getDate() + 3);
        let dateEnd = new Date(course.dateFirstEnd);

        let dateTwoStart = new Date(course.dateSecondEnd);
        let newStartTwoDate = new Date(course.dateSecondEnd);
        newStartTwoDate.setDate(newStartTwoDate.getDate() + 3);
        let dateTwoEnd = new Date(course.dateSecondEnd);

        if(newStartDate >= dateEnd && newStartTwoDate >= dateTwoEnd)
          return true;
        else
          return false;
    } else if(course.type == '')
      return false; 
    else 
      return true;
  }


  checkValidationNumberUser(usersNumber: number,  instructors: string[]): any {
    let howManyInstructor = Math.ceil(usersNumber / 6);
    if(instructors !== undefined) {
      
      if(instructors.length >= howManyInstructor)
        return {'status': true};
      else
        return {'status': false, 'number': howManyInstructor};
      
    } else {
      return {'status': false, 'number': howManyInstructor};
    }

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

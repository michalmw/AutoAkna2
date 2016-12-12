import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Courses } from './courses';

@Injectable()
export class CoursesService {


  private url = "http://akna.suprice.today:8009/api/"


  constructor( private http: Http) { }

  getCourses() {

    return this.http.get(this.url + 'courses')
          .map( (response: Response) => response.json())
          .catch( this.handleError );
  }

  getCourse(id) {

      return this.http.get(this.url + 'courses/' + id)
              .map( (response: Response) => response.json())
              .catch( this.handleError);
  }
  updateCourse(course, id) {
    console.log('Dostaje', course);
    return this.http.put(this.url + 'courses/' + id, course)
              .map( (response: Response) => response.json())
              .catch( this.handleError);
  }

  checkNumber(type) {
    return this.http.get(this.url + 'courses/count/' + type)
              .map( (response: Response) => response.json())
              .catch( this.handleError);
  }


  addCourse(course: Courses) {

    return this.http.post(this.url + 'courses', course)
          .map ( (response: Response) => response.json())
          .catch( this.handleError);
  }



  private handleError ( error: any) {
    let msg = `Status code ${error.status} na url ${error.url}`;
    console.error(msg);
    return Observable.throw(msg);
  }
}

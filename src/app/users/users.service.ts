import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsersService {


  private url = 'http://akna.suprice.today:8009/api/'

  constructor(private http: Http) { }

  getUsers() {

      return this.http.get(this.url + 'users')
        .map( (response: Response ) => response.json())
        .catch( this.handleError );
  }

  addUser(user) {

    return this.http.post(this.url + 'users', user)
          .map( (response: Response ) => response.json() )
          .catch( this.handleError);

  }

  getUser(id) {
    return this.http.get(this.url + 'users/' + id)
          .map( (response: Response) => response.json() )
          .catch( this.handleError);
  }

  updateUser(user) {
    console.log('Dostaje', user);
    return this.http.put(this.url + 'users/' + user._id, user)
          .map( (response: Response) => response.json() )
          .catch( this.handleError);
  }

  getInspektorat() {
    return this.http.get(this.url + 'inspektorat')
            .map( (response: Response) => response.json() )
            .catch( this.handleError);
  }

  addInspektorat(inspektorat) {
    return this.http.post(this.url + 'inspektorat', inspektorat)
            .map( (response: Response) => response.json())
            .catch( this.handleError );
  }

  private handleError( error: any) {
    let msg = `Status code ${error.status} na url ${error.url}`;
    console.error(msg);
    return Observable.throw(msg);
  }

}

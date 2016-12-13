
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';



import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RoutingModule, routableComponents } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';

import { UsersService } from './users/users.service';
import { LoginService } from './login/login.service';
import { CoursesService } from './courses/courses.service';

import './rxjs-extensions';

import { ChefPipe } from './courses/course/chef.pipe';






@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    routableComponents,
    ChefPipe
  ],
  imports: [
    AlertModule,  
    DropdownModule,  
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    CoursesModule,
    RoutingModule,
  ],
  providers: [
    UsersService,
    LoginService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** Users */
import { UsersListComponent } from '../users/users-list/users-list.component';
import { AddUserComponent } from '../users/add-user/add-user.component';
import { EditUserComponent } from '../users/edit-user/edit-user.component';
import { InspektoratComponent } from '../users/inspektorat/inspektorat.component';
/** Courses */
import { CoursesListComponent } from '../courses/courses-list/courses-list.component';
import { CourseComponent } from '../courses/course/course.component';
/** Login */
import { LoginComponent } from '../login/login.component';


import { AuthGuardService } from '../auth-guard.service';

const appRoutes: Routes = [
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuardService]},
  { path: 'user/:id', component: EditUserComponent, canActivate: [AuthGuardService]},
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuardService]},
  { path: 'inspektorat', component: InspektoratComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'courses', component: CoursesListComponent, canActivate: [AuthGuardService]},
  { path: 'courses-add', component: CourseComponent, canActivate: [AuthGuardService]},
  { path: 'courses/:id', component: CourseComponent, canActivate: [AuthGuardService]}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule
  ],
  providers: [
    AuthGuardService
  ],
  declarations: []
})
export class RoutingModule { }

export const routableComponents = [
	UsersListComponent,
  EditUserComponent,
  AddUserComponent,
  InspektoratComponent,
  CourseComponent,
  CoursesListComponent,
	LoginComponent
];
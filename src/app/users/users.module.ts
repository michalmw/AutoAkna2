import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { InspektoratComponent } from './inspektorat/inspektorat.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { ChefPipe } from './chef.pipe';
import { DisableSelectedChefPipe } from './disable-selected-chef.pipe';
import { PrivilegePipe } from './privilege.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseComponent, ChefPipe, DisableSelectedChefPipe, PrivilegePipe]
})
export class CoursesAddModule { }

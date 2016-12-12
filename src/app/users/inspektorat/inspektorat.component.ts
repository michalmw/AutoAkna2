import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Inspektorat } from './inspektorat';
@Component({
  selector: 'app-inspektorat',
  templateUrl: './inspektorat.component.html',
  styleUrls: ['./inspektorat.component.css']
})
export class InspektoratComponent implements OnInit {

  private inspektoraty: Inspektorat[];
  private errorMessage: string;
  private isNew: boolean = false;
  private newInspektorat: Inspektorat;


  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {

   this.getInspektorat()


  }

  add() {
    this.cleanObj();
    this.isNew = !this.isNew;
  }

  getInspektorat() {
     this.usersService.getInspektorat()
      .subscribe(
        inspektoraty => this.inspektoraty = inspektoraty,
        error => this.errorMessage = <any>error
      )
  }

  cleanObj() {
      this.newInspektorat = {
            name: '',
            address: ''
          }
  }



  addNew(inspektorat) {
    this.isNew = false;
    this.usersService.addInspektorat(inspektorat)
      .subscribe(
        inspektorat => {
          this.getInspektorat();
          this.cleanObj()
          
        },
        error => this.errorMessage = <any>error
      )
  }
}

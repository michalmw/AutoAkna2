import { Input, Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Inspektorat } from '../inspektorat/inspektorat';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() user: User;

  private id: any;
  private inspektoraty: Inspektorat[];
  // user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService) { }

  ngOnInit() {
    if(!this.user) 
      this.route
        .params
        .map( params => params['id'])
        .do(id => this.id = id)
        .subscribe(id => this.getUser());

    
    this.usersService.getInspektorat()
        .subscribe( (inspektoraty ) => {
           this.inspektoraty = inspektoraty
        });

  } 


  edit(user) {
    user._id = this.user._id;
    this.usersService.updateUser(user)
      .subscribe( () => {
        this.router.navigateByUrl('/users');
      });

  }

  private getUser() {
    this.usersService.getUser(this.id)
      .subscribe( (user: User) => this.user = user);

  }

}

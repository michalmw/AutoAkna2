import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'privilege'
})
export class PrivilegePipe implements PipeTransform {


  private courses: string[] = [];


  transform(value: any, args?: any): any {


  	for(let i = 0; i < value.length; i++) {
  		if(args == 'A' || args == 'admin')
  			this.courses.push(value[i])
  		else if( args == 'B' && value[i].privilege != 'A')
  			this.courses.push(value[i])
  		else if( args == 'C' && value[i].privilage == 'C')
  			this.courses.push(value[i])

  	}
    return this.courses;
  }

}

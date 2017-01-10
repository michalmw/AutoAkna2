import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chef'
})
export class ChefPipe implements PipeTransform {

  private responseObject: string[] = [];

  transform(value: any, args?: any): any {

    if(value !== undefined) {
      console.log('Value is', value);
      console.log('args is', args);
      let lengthArray = value.length;
      for(let i = 0; i < lengthArray; i++) {
        if(value[i].class == 'A' || value[i].class == 'B')
          this.responseObject.push(value[i]);
      }
    }
    
    
    return this.responseObject;
  }

}

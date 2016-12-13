import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chef'
})
export class ChefPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('Value is', value);
    console.log('args is', args);
    return null;
  }

}

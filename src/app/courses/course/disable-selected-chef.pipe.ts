import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disableSelectedChef'
})
export class DisableSelectedChefPipe implements PipeTransform {


  private instructorsArray: string[] = [];


  transform(value: any, args?: any): any {
    console.log('Value', value)
    console.log('Args', args)
    this.instructorsArray = [];
    let lengthValue = value.length;
    for(let i=0; i < lengthValue; i++) {
      if(value[i]._id != args)
        this.instructorsArray.push(value[i]);
    }

    return this.instructorsArray;
  }

}

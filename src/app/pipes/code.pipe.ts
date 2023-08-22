import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(value: number): string {
    let result:string;

    result = 'Ref-' + value;

    return result;
  }

}

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredStatus: string, propName: string): any {
    if (value.length === 0 || filteredStatus === '') {
      return value;
    }
    const filteredArray = [];
    for (let item of value) {
      if (item[propName] == filteredStatus) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }
}
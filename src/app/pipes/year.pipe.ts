import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  getDate = Date();
  year = (this.getDate.split(" ")[3]);
  transform(value: unknown, ...args: unknown[]): unknown {
    return 2022;
  }

}

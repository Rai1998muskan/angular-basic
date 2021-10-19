import { Pipe, PipeTransform } from '@angular/core';
// import { userInfo } from 'os';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, city: string): string {
    return 'City Name: ' + city ;
  }

}

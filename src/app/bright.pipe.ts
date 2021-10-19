import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'bright'
})
export class BrightPipe implements PipeTransform {
  
  constructor( private sanitizer:DomSanitizer){}

  transform(value: string, cityCode: string): any {

    if( cityCode === 'nj'){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">'+ cityCode + '</div>')
    }else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffcccc">'+ cityCode + '</div>')
    }

    
    
  }

}

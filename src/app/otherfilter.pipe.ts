import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'otherfilter'
})
export class OtherfilterPipe implements PipeTransform {

  
  transform(value: any, searchTerm: any): unknown {
    return value.filter(function(search){
      return (search.display.toLowerCase().indexOf(searchTerm) > -1 && search.desc.toLowerCase().indexOf(searchTerm) > -1);
    });

  }
}
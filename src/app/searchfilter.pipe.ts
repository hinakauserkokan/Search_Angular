import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): unknown {
    return value.filter(function(search){
      return search.value.toLowerCase().indexOf(searchTerm) > -1
    });
  }
}

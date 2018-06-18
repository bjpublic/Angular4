import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform
{
    transform(value: any, args?: any): any {
        let ret = value.filter( (item) => {
            let s = item.toString();
            return s.charAt( 2 ) == args;
        });
        return ret;
    }
}

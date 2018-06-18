import { Pipe, PipeTransform, Component } from '@angular/core';

@Pipe({
    name : 'myfilter',
    pure : false
})
export class MyFilterPipe implements PipeTransform
{
    transform( value: any, args?: any ): any {
        let ret = value.filter( ( item, idx ) => {
            return ( idx % 2 != 0 );
        });
        return ret;
    }
}

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button (click)="onClick()">Add</button>

        <ul>
            <li *ngFor="let item of list | myfilter">
                {{item}}
            </li>
        </ul>
    `
})
export class AppComponent
{
    list = [ 1, 2, 3, 4 ];

    onClick() {
        this.list.push( Math.random() );
    }
}

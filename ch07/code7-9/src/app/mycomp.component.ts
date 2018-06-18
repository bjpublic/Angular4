import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
    selector : 'my-comp',
    template : `
        <div>{{value}}</div>
    `
})
export class MyComp
{
    @Input() value:number;

    constructor( private cdr: ChangeDetectorRef ) {
        this.cdr.detach();
    }
}

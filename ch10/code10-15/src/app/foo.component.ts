import { Component } from '@angular/core';
import { Params } from './params.service';

@Component({
    selector : 'foo',
    template : `
        <h2>Foo Component</h2>

        <div>{{myValue1}}</div>
        <div>{{myValue2}}</div>
    `
})
export class FooComponent
{
    myValue1;
    myValue2;

    constructor( private p: Params ) {
        this.myValue1 = p.value1;
        this.myValue2 = p.value2;
    }
}

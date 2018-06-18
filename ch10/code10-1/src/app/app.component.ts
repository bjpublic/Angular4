import { Component } from '@angular/core';

class MyService
{
    value = Math.random();
}


@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <info-comp></info-comp>

        <info-comp></info-comp>
    `
})
export class AppComponent {}

@Component({
    selector : 'info-comp',
    template : `
        <h2>Info Component</h2>

        <div>{{myService.value}}</div>

        <child-comp></child-comp>
    `,
    providers : [ MyService ]
})
export class InfoComponent
{
    constructor( private myService: MyService ) {}
}

@Component({
    selector : 'child-comp',
    template : `
        <h3>Child Component</h3>

        <div>{{myService.value}}</div>
    `
})
export class ChildComponent
{
    constructor( private myService: MyService ) {}
}

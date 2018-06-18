import { Component } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <a [routerLink]="[ { outlets : { primary : [ 'foo' ], otl : [ 'bar' ] } } ]">Foo And Bar</a>
        <br />
        <button (click)="onClick()">Foo And Bar</button>

        <router-outlet></router-outlet>

        <router-outlet name="otl"></router-outlet>
    `
})
export class AppComponent
{
    constructor( private router: Router ) {}

    onClick() {
        let outlets = {};
        outlets[PRIMARY_OUTLET] = 'foo';
        outlets['otl'] = 'bar';

        this.router.navigate( [ { outlets } ] );
    }
}

@Component({
    selector : 'foo',
    template : `
        <h2>Foo Component</h2>
    `
})
export class FooComponent {}

@Component({
    selector : 'bar',
    template : `
        <h2>Bar Component</h2>
    `
})
export class BarComponent {}

import { Component } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <a [routerLink]="[ { outlets : { primary : [ 'foo' ], otl1 : [ 'bar' ], otl2 : [ 'coz' ] } } ]">
            /foo(otl1:bar//otl2:coz)
        </a>
        
        <router-outlet></router-outlet>

        <router-outlet name="otl1"></router-outlet>

        <router-outlet name="otl2"></router-outlet>
    `
})
export class AppComponent {}

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

@Component({
    selector : 'coz',
    template : `
        <h2>Coz Component</h2>
    `
})
export class CozComponent {}

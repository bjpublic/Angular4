import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <a [routerLink]="[ { outlets : { primary : [ 'foo', 123 ], otl : [ 'bar', { id : 456 } ] } } ]"
           [queryParams]="{ debug : true }"
           [fragment]="abc">
            Foo And Bar
        </a>

        <router-outlet></router-outlet>

        <router-outlet name="otl"></router-outlet>
    `
})
export class AppComponent {}

@Component({
    selector : 'foo',
    template : `
        <h2>Foo Component</h2>
    `
})
export class FooComponent
{
    constructor( private acRoute: ActivatedRoute ) {
        console.log( "foo params", acRoute.snapshot.params );
        console.log( "foo queryParams", acRoute.snapshot.queryParams );
        console.log( "foo fragment", acRoute.snapshot.fragment );
    }
}

@Component({
    selector : 'bar',
    template : `
        <h2>Bar Component</h2>
    `
})
export class BarComponent
{
    constructor( private acRoute: ActivatedRoute ) {
        console.log( "bar params", acRoute.snapshot.params );
        console.log( "bar queryParams", acRoute.snapshot.queryParams );
        console.log( "bar fragment", acRoute.snapshot.fragment );
    }
}

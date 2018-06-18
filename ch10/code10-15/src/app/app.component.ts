import { Component, ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { Params } from './params.service';
import { FooComponent } from './foo.component';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button (click)="onClick()">Create</button>
    `
})
export class AppComponent
{
    constructor( private vcr: ViewContainerRef, private resolver: ComponentFactoryResolver ) {}

    onClick() {
        let ijt = ReflectiveInjector.resolveAndCreate( 
            [ { provide : Params, useValue : new Params( "hello", "world" ) } ],
            this.vcr.injector );

        let factory = this.resolver.resolveComponentFactory( FooComponent );
        
        this.vcr.createComponent( factory, null, ijt );
    }
}

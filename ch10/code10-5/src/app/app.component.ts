import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
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
        let factory = this.resolver.resolveComponentFactory( FooComponent );
        this.vcr.createComponent( factory );
    }
}

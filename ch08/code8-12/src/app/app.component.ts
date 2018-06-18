import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button (click)="onClick()">Click</button>

        <ng-template>
            <h1>Template Content</h1>
            <div>{{msg}}</div>
            <button (click)="onTest()">Test</button>
        </ng-template>
    `
})
export class AppComponent
{
    @ViewChild(TemplateRef) template: TemplateRef<any>;

    msg = "hello";

    constructor( private vcr: ViewContainerRef ) {}

    onClick() {
        this.vcr.createEmbeddedView( this.template );
    }

    onTest() {
        alert( 'world' );
    }
}

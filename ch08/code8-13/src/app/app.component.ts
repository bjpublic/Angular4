import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button (click)="onClick1()">Click1</button>
        <button (click)="onClick2()">Click2</button>

        <ng-template #temp1>
            <h1>Template 1 Content</h1>
        </ng-template>

        <ng-template #temp2>
            <h1>Template 2 Content</h1>
        </ng-template>
    `
})
export class AppComponent
{
    @ViewChild('temp1') template1: TemplateRef<any>;
    @ViewChild('temp2') template2: TemplateRef<any>;

    constructor( private vcr: ViewContainerRef ) {}

    onClick1() {
        this.vcr.createEmbeddedView( this.template1 );
    }

    onClick2() {
        this.vcr.createEmbeddedView( this.template2 );
    }
}

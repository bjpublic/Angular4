import { Component, ViewChild, TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button (click)="create()">Create</button>
        <button (click)="remove()">Remove</button>
        <button (click)="remove2()">Remove2</button>

        <ng-template>
            <h1>Template Content</h1>
        </ng-template>
    `
})
export class AppComponent
{
    @ViewChild(TemplateRef) template: TemplateRef<any>;

    private createdView: EmbeddedViewRef<any> = null;

    constructor( private vcr: ViewContainerRef ) {}

    create() {
        if( this.createdView ) return;
        this.createdView = this.vcr.createEmbeddedView( this.template );
    }

    remove() {
        if( !this.createdView ) return;
        this.createdView.destroy();
        this.createdView = null;
    }

    remove2() {
        if( this.vcr.length <= 0 ) return;
        this.vcr.remove( 0 );
    }
}

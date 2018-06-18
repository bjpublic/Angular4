import { Component, ContentChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
    selector : 'my-frame',
    template : `
        <h2>MyFrame Component</h2>

        <button (click)="create()">Create</button>
    `
})
export class MyFrame
{
    @ContentChild(TemplateRef) template: TemplateRef<any>;

    constructor( private vcr: ViewContainerRef ) {}

    create() {
        let context = {
            message : "world",
            handler : function() { alert( "world" ) }
        };

        this.vcr.createEmbeddedView( this.template, context );
    }
}

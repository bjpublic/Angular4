import { Component, Directive, ContentChild, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector : '[myFrameHeader]'
})
export class MyFrameHeader {}

@Directive({
    selector : '[myFrameBody]'
})
export class MyFrameBody {}

@Directive({
    selector : '[myFrameTail]'
})
export class MyFrameTail {}

@Component({
    selector : 'my-frame',
    template : `
        <h2>MyFrame Component</h2>

        <div #frameHeader></div>

        <div #frameBody></div>

        <div #frameTail></div>
    `
})
export class MyFrame
{
    @ContentChild( MyFrameHeader, { read : TemplateRef }) headerTmp:TemplateRef<any>;
    @ContentChild( MyFrameBody, { read : TemplateRef }) bodyTmp:TemplateRef<any>;
    @ContentChild( MyFrameTail, { read : TemplateRef }) tailTmp:TemplateRef<any>;

    @ViewChild('frameHeader', { read : ViewContainerRef } ) headerVcr: ViewContainerRef;
    @ViewChild('frameBody', { read : ViewContainerRef } ) bodyVcr: ViewContainerRef;
    @ViewChild('frameTail', { read : ViewContainerRef } ) tailVcr: ViewContainerRef;

    ngAfterViewInit() {
        this.headerVcr.createEmbeddedView( this.headerTmp );
        this.bodyVcr.createEmbeddedView( this.bodyTmp );
        this.tailVcr.createEmbeddedView( this.tailTmp );
    }
}

import { Component } from '@angular/core';

@Component({
    selector : 'my-frame',
    template : `
        <div>
            <ng-content></ng-content>
        </div>
    `
})
export class MyFrame
{
    onClick() {
        alert( 'world' );
    }
}

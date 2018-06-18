import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <my-frame>
            <button (click)="onClick()">Click</button>
        </my-frame>
    `
})
export class AppComponent
{
    onClick() {
        alert( 'hello' );
    }
}

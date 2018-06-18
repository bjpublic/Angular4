import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <my-frame>

            <ng-template>
                <div>{{msg}}</div>
                <button (click)="onClick()">Click</button>
            </ng-template>

        </my-frame>
    `
})
export class AppComponent
{
    msg = 'hello';

    onClick() {
        alert( 'hello' );
    }
}

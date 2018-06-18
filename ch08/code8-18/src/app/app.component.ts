import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <my-frame>
            <ng-template let-msg2="message" let-click2="handler">
                <div>{{msg}}</div>
                <div>{{msg2}}</div>

                <button (click)="click()">Click</button>
                <button (click)="click2()">Click2</button>
            </ng-template>
        </my-frame>
    `
})
export class AppComponent
{
    msg = "hello";

    click() {
        alert( "hello" );
    }
}

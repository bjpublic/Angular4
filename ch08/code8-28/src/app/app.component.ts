import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <my-frame>
            <ng-template myFrameHeader>
                <h2>Header</h2>
            </ng-template>

            <ng-template myFrameBody>
                <div>Body</div>
            </ng-template>

            <ng-template myFrameTail>
                <div>Tail</div>
            </ng-template>
        </my-frame>
    `
})
export class AppComponent {}

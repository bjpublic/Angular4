import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button (click)="onClick()">Increase</button>

        <my-comp [value]="myValue"></my-comp>
    `
})
export class AppComponent
{
    myValue = 0;

    onClick() {
        this.myValue++;
    }
}

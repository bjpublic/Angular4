import { Component, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button (click)="onClick()">Start Timer</button>

        <div>{{value}}</div>
    `
})
export class AppComponent
{
    value = 0

    constructor( private zone: NgZone, private cdr: ChangeDetectorRef ) {}

    onClick() {
        this.zone.runOutsideAngular( () => {
            setInterval( () => {
                this.value++;

                if( this.value % 10 == 0 ) {
                    this.cdr.detectChanges();
                }
            }, 1000 );
        })
    }
}

import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <div>{{value.num}}</div>
    `,
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent
{
    value = { num : 0 };

    constructor( private cdr: ChangeDetectorRef ) {}

    ngOnInit() {
        setInterval( () => {
            this.value.num++;

            if( this.value.num % 10 == 0 ) {
                this.cdr.markForCheck();
            }
        }, 1000 );
    }
}

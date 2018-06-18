import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'bar',
    template : `
        <h2>Bar Component</h2>

        <div>ID : {{myId}}</div>
    `
})
export class BarComponent
{
    myId;

    constructor( private acRoute: ActivatedRoute ) {
        this.myId = acRoute.snapshot.params.id;
    }
}

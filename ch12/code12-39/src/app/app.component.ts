import { Component, Optional, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Cache } from '../cache';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <div>{{myData?myData.data:''}}</div>
    `
})
export class AppComponent
{
    myData;

    constructor( private cache: Cache,
                 @Optional() @Inject('baseUrl') private baseUrl,
                 private http: Http ) {
        this.baseUrl = this.baseUrl || "";
    }

    ngOnInit() {
        if( !(this.cache.data) )
            this.http.get( this.baseUrl + "/getData" ).subscribe( res => {
                this.cache.data = res.json();
                this.myData = this.cache.data;
            });
        else
            this.myData = this.cache.data;
    }
}

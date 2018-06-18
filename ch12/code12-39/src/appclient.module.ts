import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { Cache } from './cache';

@NgModule({
    imports : [
        AppModule
    ],
    providers : [
        { provide : Cache, useValue : new Cache() }
    ],
    bootstrap : [ AppComponent ]
})
export class AppClientModule
{
    constructor( private cache: Cache ) {
        cache.data = window['CACHE_DATA'];
    }
}

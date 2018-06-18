import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComp } from './mycomp.component';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent,
        MyComp
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

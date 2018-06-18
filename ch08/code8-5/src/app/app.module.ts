import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFrame } from './myframe.component';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent,
        MyFrame
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyFilterPipe, AppComponent } from './app.component';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        MyFilterPipe, AppComponent
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

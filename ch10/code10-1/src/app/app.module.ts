import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, InfoComponent, ChildComponent } from './app.component';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent,
        InfoComponent,
        ChildComponent
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

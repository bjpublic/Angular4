import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooComponent } from './foo.component';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent,
        FooComponent
    ],
    entryComponents : [
        FooComponent
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

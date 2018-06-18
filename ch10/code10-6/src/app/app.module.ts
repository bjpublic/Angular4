import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
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
    providers : [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: [ FooComponent ],
          multi: true }
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

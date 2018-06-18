import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent, FooComponent, BarComponent } from './app.component';

@NgModule({
    imports : [
        BrowserModule,
        RouterModule.forRoot([
            { path : 'foo/:id', component : FooComponent },
            { path : 'bar', component : BarComponent, outlet : 'otl' }
        ])
    ],
    declarations : [
        AppComponent,
        FooComponent,
        BarComponent
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

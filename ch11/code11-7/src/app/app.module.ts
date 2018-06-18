import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent, FooComponent, BarComponent, CozComponent } from './app.component';

@NgModule({
    imports : [
        BrowserModule,
        RouterModule.forRoot([
            { path : 'foo', component : FooComponent },
            { path : 'bar', component: BarComponent, outlet : 'otl1' },
            { path : 'coz', component : CozComponent, outlet : 'otl2'}
        ])
    ],
    declarations : [
        AppComponent,
        FooComponent,
        BarComponent,
        CozComponent
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar.component';

@NgModule({
    imports : [
        BrowserModule.withServerTransition({
		  appId: 'my-universal-app'
		}),
        HttpModule,
        RouterModule.forRoot([
            { path : '', component : FooComponent },
            { path : 'bar/:id', component : BarComponent }
        ], { useHash : false } )
    ],
    declarations : [
        AppComponent, FooComponent, BarComponent
    ],
    bootstrap : [
        AppComponent
    ]
})
export class AppModule {}

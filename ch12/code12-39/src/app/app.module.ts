import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
    imports : [
        BrowserModule.withServerTransition({
		  appId: 'my-universal-app'
		}),
        HttpModule
    ],
    declarations : [
        AppComponent
    ]
})
export class AppModule {}

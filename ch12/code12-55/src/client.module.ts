import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

@NgModule({
    imports : [
        AppModule,
        UniversalModule
    ],
    bootstrap : [ AppComponent ]
})
export class ClientModule {}

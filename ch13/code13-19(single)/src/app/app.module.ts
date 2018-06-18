import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyFilterPipe } from './myfilter.pipe';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent, MyFilterPipe
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

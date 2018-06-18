import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFrame, MyFrameHeader, MyFrameBody, MyFrameTail} from './myframe.component';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent,
        MyFrame, MyFrameHeader, MyFrameBody, MyFrameTail
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

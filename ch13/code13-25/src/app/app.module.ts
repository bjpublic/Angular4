import { NgModule } from '@angular/core';
import { WorkerAppModule } from '@angular/platform-webworker';
import { AppComponent } from './app.component';

@NgModule({
    imports : [
        WorkerAppModule
    ],
    declarations : [
        AppComponent
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

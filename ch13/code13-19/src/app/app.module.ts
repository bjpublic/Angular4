import { NgModule } from '@angular/core';
import { WorkerAppModule } from '@angular/platform-webworker';
import { AppComponent } from './app.component';
import { MyFilterPipe } from './myfilter.pipe';

@NgModule({
    imports : [
        WorkerAppModule
    ],
    declarations : [
        AppComponent, MyFilterPipe
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

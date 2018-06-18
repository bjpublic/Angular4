import 'core-js';
import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare var preboot: any;

platformBrowserDynamic().bootstrapModule( AppModule ).then( r => {
    preboot.complete();
});

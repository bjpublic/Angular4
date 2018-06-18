import 'core-js';
import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppClientModule } from './appclient.module';

platformBrowserDynamic().bootstrapModule( AppClientModule );

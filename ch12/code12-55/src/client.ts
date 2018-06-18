import 'angular2-universal-polyfills';
import './_workaround.client';

import { platformUniversalDynamic } from 'angular2-universal/browser';
import { ClientModule } from './client.module';

platformUniversalDynamic().bootstrapModule( ClientModule );

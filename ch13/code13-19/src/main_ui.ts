import { bootstrapWorkerUi } from "@angular/platform-webworker";
import { PlatformRef, ApplicationRef } from '@angular/core';
import { ClientMessageBrokerFactory, ClientMessageBroker,
         ServiceMessageBrokerFactory, ServiceMessageBroker,
         UiArguments, FnArg, PRIMITIVE } from '@angular/platform-webworker';
import * as jQuery from 'jquery';

bootstrapWorkerUi( "dist/bundle_worker.js" );

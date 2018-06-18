import { bootstrapWorkerUi } from '@angular/platform-webworker';
import { PlatformRef, ApplicationRef } from '@angular/core';
import { ClientMessageBrokerFactory, ClientMessageBroker,
         ServiceMessageBrokerFactory, ServiceMessageBroker,
         UiArguments, FnArg, PRIMITIVE } from '@angular/platform-webworker';
import * as jQuery from 'jquery';

bootstrapWorkerUi( "dist/bundle_worker.js" ).then( (ref: PlatformRef) => {
        let cmbFactory: ClientMessageBrokerFactory = ref.injector.get( ClientMessageBrokerFactory );
        let smbFactory: ServiceMessageBrokerFactory = ref.injector.get( ServiceMessageBrokerFactory );

        let cmb: ClientMessageBroker = cmbFactory.createMessageBroker( "ch2", false );
        let smb: ServiceMessageBroker = smbFactory.createMessageBroker( "ch1", false );

        smb.registerMethod( "notifyInit", [PRIMITIVE], ( arg ) => {
            jQuery( "#" + arg ).click(function()
            {
                let args = new UiArguments( "compMethod", [ new FnArg( "hello", PRIMITIVE ) ] );
                cmb.runOnService( args, PRIMITIVE ).then( ( ret ) => {
                    console.log( "compMethod returned: " + ret );
                });
            });
        }, null );
    }
);

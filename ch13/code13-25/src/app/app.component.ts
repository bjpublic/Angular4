import { Component } from '@angular/core';
import { ClientMessageBroker,
         ClientMessageBrokerFactory,
         ServiceMessageBroker,
         ServiceMessageBrokerFactory,
         UiArguments,
         FnArg,
         PRIMITIVE } from '@angular/platform-webworker';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <button id="btn">Call</button>
    `
})
export class AppComponent
{
    cmb: ClientMessageBroker = null;
    smb: ServiceMessageBroker = null;

    constructor( private cmbFactory: ClientMessageBrokerFactory,
                 private smbFactory: ServiceMessageBrokerFactory ){
        this.cmb = cmbFactory.createMessageBroker( "ch1", false );

        this.smb = smbFactory.createMessageBroker( "ch2", false );
        this.smb.registerMethod( "compMethod",
                                 [PRIMITIVE],
                                 this.compMethod,
                                 PRIMITIVE );
    }

    ngAfterViewInit() {
        setTimeout( () => {
            let uiArg =
                new UiArguments( "notifyInit",
                                [ new FnArg( "btn", PRIMITIVE ) ] );
            this.cmb.runOnService( uiArg, null );
        }, 0 );
    }

    compMethod( arg ) {
        console.log( "Called from UI thread", arg );

        let start = new Date().getTime();
        let end = new Date().getTime();
        while( end - start < 5000 ) //1초간 루핑
           end = new Date().getTime();
        
        let num = Math.random();
        return Promise.resolve( num );
    }
}

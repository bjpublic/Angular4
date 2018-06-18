import { Component, Injector, ReflectiveInjector } from '@angular/core';

class MyService {}

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>
    `,
    providers : [ MyService ]
})
export class AppComponent
{
    constructor( private injector: Injector ) {}

    ngOnInit() {
        let ijt1 = ReflectiveInjector.resolveAndCreate([], this. injector); 
        let myService1 = ijt1.get(MyService);
         
        let ijt2 = ReflectiveInjector.resolveAndCreate([]);
        try {
            let myService2 = ijt2.get(MyService);
        }
        catch( err ) {
            console.log( err );
        }
    }
}

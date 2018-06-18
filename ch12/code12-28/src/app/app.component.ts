import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <router-outlet></router-outlet>
    `
})
export class AppComponent {}

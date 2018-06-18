import { Component, ElementRef } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <div style="width:500px;height:300px;overflow:auto"
            (scroll)="onScroll()">
            <ul>
                <li *ngFor="let item of list | myfilter:3">
                    <span>{{item}}</span>
                </li>
            </ul>
        </div>
    `
})
export class AppComponent
{
    list = [];

    ngOnInit() {
        for( let i = 0; i < 100000; i++ )
            this.list.push( Math.random() );
    }

    onScroll() {
        //이벤트 핸들러만 만들어 두어
        //스크롤 할때마다 변경감지가 계속 일어나게 만든다.
    }
}

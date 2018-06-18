import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <ul tree>
            <li *treeNode="let item of treeData">
                <button (click)="item.hideChildren=!item.hideChildren">+/-</button>
                <span>{{item.name}}</span>
                <ul [hidden]="item.hideChildren">
                    <tree-children [children]="item.children"></tree-children>
                </ul>
            </li>
        </ul>
    `
})
export class AppComponent
{
    treeData = [
        { name : "자동차", children : [
            { name : "현대" },
            { name : "기아" }
        ]},
        { name : "핸드폰", children : [
            { name : "삼성" },
            { name : "애플" }
        ]}
    ];
}

import { Component } from '@angular/core';

@Component({
    selector : 'app',
    template : `
        <h1>App Component</h1>

        <table tree border="1">
           <tr [style.background-color]="'#EEE'">
               <td>부서</td>
               <td>매출</td>
           </tr>
            <tr *treeNode="let item of salesData;let d = depth"  flatTree>
                <td [style.padding-left.px]="d*30">{{item.name}}</td>
                <td>{{item.amount}}</td>
                <tree-children [children]="item.children"></tree-children>
            </tr>
        </table>
    `
})
export class AppComponent
{
    salesData = [
        { name : "마케팅", amount : 500, children : [
            { name : "마케팅1팀", amount : 300 },
            { name : "마케팅2팀", amount : 200 }
        ]},
        { name : "영업", amount : 700, children : [
            { name : "영업1팀", amount : 400 },
            { name : "영업2팀", amount : 300 }
        ]}
    ];
}

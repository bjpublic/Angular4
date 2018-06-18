import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tree, TreeNode, TreeChildren, FlatTree } from './tree';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        AppComponent, Tree, TreeNode, TreeChildren, FlatTree
    ],
    bootstrap : [ AppComponent ]
})
export class AppModule {}

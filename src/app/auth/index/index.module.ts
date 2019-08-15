import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndexPage } from './index.page';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [
    {
        path: '',
        component: IndexPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexPage]
})
export class IndexPageModule { }

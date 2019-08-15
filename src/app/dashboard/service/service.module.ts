import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicePage } from './service.page';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: ServicePage
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
    declarations: [ServicePage]
})
export class ServicePageModule { }

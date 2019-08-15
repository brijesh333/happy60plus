import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.router.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MaterialModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterProviderPage } from './register-provider.page';
import { MaterialModule } from '../../../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterProviderPage
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
  declarations: [RegisterProviderPage]
})
export class RegisterProviderPageModule {}

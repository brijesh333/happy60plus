import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
// import { AuthenticationGuard } from './auth.guard';
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        AuthRoutingModule,
        IonicStorageModule.forRoot(),
        MaterialModule
    ],
    providers: [
    ]
})
export class AuthModule {

}

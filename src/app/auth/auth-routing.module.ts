import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'registerUser',
        loadChildren: './register/register-user/register-user.module#RegisterUserPageModule'
    },
    {
        path: 'registerProvider',
        loadChildren: './register/register-provider/register-provider.module#RegisterProviderPageModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'index',
        loadChildren: './index/index.module#IndexPageModule'
    },
    {
        path: '',
        loadChildren: './login/login.module#LoginPageModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }

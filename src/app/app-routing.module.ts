import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'register',
    //     loadChildren: './auth/reg/register/register.module#RegisterPageModule'
    // },
    // {
    //     path: 'registerProvider',
    //     loadChildren: './auth/reg/register-provider/register-provider.module#RegisterProviderPageModule'
    // },
    // {
    //     path: 'login',
    //     loadChildren: './auth/login/login.module#LoginPageModule'
    // },
    // {
    //     path: 'index',
    //     loadChildren: './auth/index/index.module#IndexPageModule'
    // },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

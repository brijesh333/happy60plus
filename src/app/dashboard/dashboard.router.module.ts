import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from '../core';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticationGuard],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./profile/profile.module').then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./events/events.module').then(m => m.EventsPageModule)
                    }
                ]
            },
            {
                path: 'services',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./service/service.module').then(m => m.ServicePageModule)
                    }
                ]
            },
            {
                path: '**',
                redirectTo: '/dashboard/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from '@core';
import { LayoutsModule, MainLayoutComponent } from '@layouts';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: AppRouteEnum.OptimisticUi,
                loadChildren: () => import('./pages/optimistic-ui').then((m) => m.OptimisticUiModule)
            },
            {
                path: AppRouteEnum.PessimisticUi,
                loadChildren: () => import('./pages/pessimistic-ui').then((m) => m.PessimisticUiModule)
            },
            {
                path: '**',
                redirectTo: AppRouteEnum.PessimisticUi,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        LayoutsModule,
        RouterModule
    ]
})
export class AppRoutingModule {}

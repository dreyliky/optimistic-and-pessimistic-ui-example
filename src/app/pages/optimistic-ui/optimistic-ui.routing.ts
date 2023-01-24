import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptimisticUiComponent } from './optimistic-ui.component';

const routes: Routes = [
    {
        path: '',
        component: OptimisticUiComponent
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
export class OptimisticUiRoutingModule {}

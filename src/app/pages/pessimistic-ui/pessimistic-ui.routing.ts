import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessimisticUiComponent } from './pessimistic-ui.component';

const routes: Routes = [
    {
        path: '',
        component: PessimisticUiComponent
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
export class PessimisticUiRoutingModule {}

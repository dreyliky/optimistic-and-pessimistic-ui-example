import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FeaturesModule } from '@features';
import { NgxAsyncModule } from 'ngx-async-directive';
import {
    LabelCreationButtonComponent,
    LabelCreationWindowComponent,
    LabelDeleteButtonComponent
} from './components';
import { PessimisticUiComponent } from './pessimistic-ui.component';
import { PessimisticUiRoutingModule } from './pessimistic-ui.routing';

@NgModule({
    declarations: [
        PessimisticUiComponent,
        LabelDeleteButtonComponent,
        LabelCreationWindowComponent,
        LabelCreationButtonComponent
    ],
    imports: [
        CommonModule,
        PessimisticUiRoutingModule,
        FeaturesModule,
        NgxAsyncModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ]
})
export class PessimisticUiModule {}

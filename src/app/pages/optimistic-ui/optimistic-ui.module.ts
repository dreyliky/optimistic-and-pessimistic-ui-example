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
    LabelCreationWindowComponent
} from './components';
import { OptimisticUiComponent } from './optimistic-ui.component';
import { OptimisticUiRoutingModule } from './optimistic-ui.routing';

@NgModule({
    declarations: [
        OptimisticUiComponent,
        LabelCreationWindowComponent,
        LabelCreationButtonComponent
    ],
    imports: [
        CommonModule,
        OptimisticUiRoutingModule,
        FeaturesModule,
        NgxAsyncModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ]
})
export class OptimisticUiModule {}

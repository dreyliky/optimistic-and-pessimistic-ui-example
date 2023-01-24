import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { LabelsApi } from './api';
import {
    LabelCreationFormComponent,
    LabelListComponent,
    LabelListItemActionButtonsDirective
} from './components';
import {
    OptimisticLabelsService,
    PessimisticLabelsService
} from './services';
import { LabelsState } from './states';

@NgModule({
    declarations: [
        LabelCreationFormComponent,
        LabelListItemActionButtonsDirective,
        LabelListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        LabelListComponent,
        LabelCreationFormComponent,
        LabelListItemActionButtonsDirective
    ],
    providers: [
        OptimisticLabelsService,
        PessimisticLabelsService,
        LabelsApi,
        LabelsState
    ]
})
export class LabelModule {}

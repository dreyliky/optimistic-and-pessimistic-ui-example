import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { markControlAsTouchedAndValidate } from '@core';
import { PessimisticLabelsService } from '@features/label';
import { Observable, tap } from 'rxjs';
import { LabelCreationForm } from './classes';

@Component({
    selector: 'app-label-creation-window',
    templateUrl: './label-creation-window.component.html',
    styleUrls: ['./label-creation-window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        LabelCreationForm
    ]
})
export class LabelCreationWindowComponent {
    public labelCreationProcess$: Observable<unknown> | null = null;

    constructor(
        public readonly labelCreationForm: LabelCreationForm,
        private readonly labelsService: PessimisticLabelsService,
        private readonly dialogRef: MatDialogRef<void>
    ) {}

    public onCreateButtonClick(): void {
        if (this.labelCreationForm.valid) {
            this.labelCreationProcess$ = this.createLabelCreationProcessObservable();
        } else {
            markControlAsTouchedAndValidate(this.labelCreationForm);
        }
    }

    private createLabelCreationProcessObservable(): Observable<unknown> {
        const creationData = this.labelCreationForm.getRawValue();

        return this.labelsService.create(creationData)
            .pipe(
                tap(() => this.dialogRef.close(true))
            );
    }
}

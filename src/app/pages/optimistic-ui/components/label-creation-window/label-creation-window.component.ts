import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { markControlAsTouchedAndValidate } from '@core';
import { OptimisticLabelsService } from '@features/label';
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
    constructor(
        public readonly labelCreationForm: LabelCreationForm,
        private readonly labelsService: OptimisticLabelsService,
        private readonly dialogRef: MatDialogRef<void>
    ) {}

    public onCreateButtonClick(): void {
        if (this.labelCreationForm.valid) {
            this.createLabel();
            this.dialogRef.close(true);
        } else {
            markControlAsTouchedAndValidate(this.labelCreationForm);
        }
    }

    private createLabel(): void {
        const creationData = this.labelCreationForm.getRawValue();

        this.labelsService.create(creationData)
            .subscribe();
    }
}

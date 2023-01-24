import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injector
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LabelCreationWindowComponent } from '../label-creation-window';

@Component({
    selector: 'app-label-creation-button',
    templateUrl: './label-creation-button.component.html',
    styleUrls: ['./label-creation-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelCreationButtonComponent {
    private readonly dialogConfig: MatDialogConfig = {
        width: '400px',
        injector: inject(Injector),
        disableClose: true
    };

    constructor(
        private readonly dialogService: MatDialog
    ) {}

    public onClick(): void {
        this.dialogService.open(LabelCreationWindowComponent, this.dialogConfig);
    }
}

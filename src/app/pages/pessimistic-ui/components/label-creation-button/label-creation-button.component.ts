import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Injector,
    Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DestroyService } from '@core';
import { filter, takeUntil } from 'rxjs';
import { LabelCreationWindowComponent } from '../label-creation-window';

@Component({
    selector: 'app-label-creation-button',
    templateUrl: './label-creation-button.component.html',
    styleUrls: ['./label-creation-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DestroyService
    ]
})
export class LabelCreationButtonComponent {
    @Output()
    public labelCreated = new EventEmitter<void>();

    private readonly dialogConfig: MatDialogConfig = {
        width: '400px',
        injector: inject(Injector),
        disableClose: true
    };

    constructor(
        private readonly dialogService: MatDialog,
        private readonly viewDestroyed$: DestroyService
    ) {}

    public onClick(): void {
        this.dialogService.open(LabelCreationWindowComponent, this.dialogConfig)
            .afterClosed()
            .pipe(
                filter((label) => !!label),
                takeUntil(this.viewDestroyed$)
            )
            .subscribe(() => this.labelCreated.emit());
    }
}

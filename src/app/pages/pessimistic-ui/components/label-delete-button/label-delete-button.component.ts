import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Label, PessimisticLabelsService } from '@features/label';
import { Observable, tap } from 'rxjs';

@Component({
    selector: 'app-label-delete-button',
    templateUrl: './label-delete-button.component.html',
    styleUrls: ['./label-delete-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelDeleteButtonComponent {
    @Input()
    public data!: Label;

    @Output()
    public labelDeleted = new EventEmitter<void>();

    public deletingProcess$: Observable<unknown> | null = null;

    constructor(
        private readonly labelsService: PessimisticLabelsService
    ) {}

    public onClick(): void {
        this.deletingProcess$ = this.labelsService.delete(this.data.id)
            .pipe(
                tap(() => this.labelDeleted.emit())
            );
    }
}

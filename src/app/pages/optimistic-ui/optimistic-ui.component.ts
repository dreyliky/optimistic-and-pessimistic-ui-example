import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestroyService } from '@core';
import { Label, OptimisticLabelsService } from '@features/label';
import { switchMap, takeUntil } from 'rxjs';

@Component({
    selector: 'app-optimistic-ui',
    templateUrl: './optimistic-ui.component.html',
    styleUrls: ['./optimistic-ui.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DestroyService
    ]
})
export class OptimisticUiComponent {
    public labels$ = this.labelsService.update()
        .pipe(
            switchMap(() => this.labelsService.data$)
        );

    constructor(
        private readonly labelsService: OptimisticLabelsService,
        private readonly viewDestroyed$: DestroyService
    ) {}

    public onDeleteButtonClick(label: Label): void {
        this.labelsService.delete(label.id)
            .pipe(takeUntil(this.viewDestroyed$))
            .subscribe();
    }
}

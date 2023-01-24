import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Label, PessimisticLabelsService } from '@features/label';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pessimistic-ui',
    templateUrl: './pessimistic-ui.component.html',
    styleUrls: ['./pessimistic-ui.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PessimisticUiComponent {
    public labels$: Observable<Label[]> = this.labelsService.update();

    constructor(
        private readonly labelsService: PessimisticLabelsService
    ) {}

    public onLabelCreated(): void {
        this.labels$ = this.labelsService.update();
    }

    public onLabelDeleted(): void {
        this.labels$ = this.labelsService.update();
    }
}

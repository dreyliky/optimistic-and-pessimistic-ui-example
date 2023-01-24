import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabelCreationDto } from '../../interfaces';

@Component({
    selector: 'label-creation-form',
    templateUrl: './label-creation-form.component.html',
    styleUrls: ['./label-creation-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelCreationFormComponent {
    @Input()
    public formGroup!: FormGroup<FormGroupDef<LabelCreationDto>>;
}

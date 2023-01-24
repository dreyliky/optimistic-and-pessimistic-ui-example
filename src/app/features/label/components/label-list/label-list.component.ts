import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Label } from '../../interfaces';
import { LabelListItemActionButtonsDirective as ActionButtons } from './label-list-item-action-buttons.directive';

@Component({
    selector: 'label-list',
    templateUrl: './label-list.component.html',
    styleUrls: ['./label-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelListComponent {
    @Input()
    public data!: Label[];

    @ContentChild(ActionButtons, { read: TemplateRef })
    public actionButtonsTemplate!: TemplateRef<unknown>;
}

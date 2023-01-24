import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelCreationDto } from '@features/label';

@Injectable()
export class LabelCreationForm extends FormGroup<FormGroupDef<LabelCreationDto>> {
    constructor() {
        super({
            name: new FormControl('', {
                nonNullable: true,
                validators: [Validators.required]
            }),
            color: new FormControl('', {
                nonNullable: true,
                validators: [Validators.required]
            })
        });
    }
}

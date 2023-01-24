import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LabelsApi } from '../api';
import { Label, LabelCreationDto, LabelEditingDto } from '../interfaces';

@Injectable()
export class PessimisticLabelsService {
    constructor(
        private readonly labelsApi: LabelsApi
    ) {}

    public update(): Observable<Label[]> {
        return this.labelsApi.getAll();
    }

    public create(creationData: LabelCreationDto): Observable<number> {
        return this.labelsApi.create(creationData);
    }

    public edit(id: number, editingData: LabelEditingDto): Observable<unknown> {
        return this.labelsApi.edit(id, editingData);
    }

    public delete(id: number): Observable<unknown> {
        return this.labelsApi.delete(id);
    }
}

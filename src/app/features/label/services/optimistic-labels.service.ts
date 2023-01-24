import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { LabelsApi } from '../api';
import { Label, LabelCreationDto, LabelEditingDto } from '../interfaces';
import { LabelsState } from '../states';

@Injectable()
export class OptimisticLabelsService {
    public readonly data$ = this.labelsState.data$;
    
    constructor(
        private readonly labelsApi: LabelsApi,
        private readonly labelsState: LabelsState
    ) {}

    public update(): Observable<Label[]> {
        return this.labelsApi.getAll()
            .pipe(
                tap((data) => this.labelsState.set(data))
            );
    }

    public create(creationData: LabelCreationDto): Observable<Label> {
        const itemIndex = this.labelsState.pushFakeItemByCreationData(creationData);

        return this.labelsApi.create(creationData)
            .pipe(
                switchMap((id) => this.labelsApi.get(id)),
                tap((item) => this.labelsState.updateItemByIndex(item, itemIndex)),
                catchError((error) => {
                    this.labelsState.removeItemByIndex(itemIndex);

                    return throwError(() => new Error(error));
                })
            );
    }

    public edit(id: number, editingData: LabelEditingDto): Observable<unknown> {
        return this.labelsApi.edit(id, editingData);
    }

    public delete(id: number): Observable<unknown> {
        const itemIndex = this.labelsState.getItemIndexById(id);
        const item = this.labelsState.data![itemIndex];

        this.labelsState.removeItemByIndex(itemIndex);

        return this.labelsApi.delete(id)
            .pipe(
                catchError((error) => {
                    this.labelsState.insertItemByIndex(itemIndex, item);

                    return throwError(() => new Error(error));
                })
            );
    }
}

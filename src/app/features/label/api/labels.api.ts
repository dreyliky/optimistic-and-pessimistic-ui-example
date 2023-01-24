import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Label, LabelCreationDto, LabelEditingDto } from '../interfaces';

@Injectable()
export class LabelsApi {
    constructor(
        private readonly httpClient: HttpClient
    ) {}

    public get(id: number): Observable<Label> {
        return this.httpClient.get<Label>(`${environment.apiHost}/labels/${id}`);
    }

    public getAll(): Observable<Label[]> {
        return this.httpClient.get<Label[]>(`${environment.apiHost}/labels`);
    }

    public create(creationData: LabelCreationDto): Observable<number> {
        return this.httpClient.post<number>(`${environment.apiHost}/labels`, creationData);
    }

    public edit(id: number, editingData: LabelEditingDto): Observable<unknown> {
        return this.httpClient.put(`${environment.apiHost}/labels/${id}`, editingData);
    }

    public delete(id: number): Observable<unknown> {
        return this.httpClient.delete(`${environment.apiHost}/labels/${id}`);
    }
}

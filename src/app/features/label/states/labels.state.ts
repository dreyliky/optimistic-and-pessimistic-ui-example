import { Injectable } from '@angular/core';
import { ArrayState, NgxState } from 'ngx-base-state';
import { Label, LabelCreationDto, LabelEditingDto } from '../interfaces';

@NgxState()
@Injectable()
export class LabelsState extends ArrayState<Label> {
    public getItemIndexById(id: number): number {
        return this.data!.findIndex((item) => (item.id === id));
    }

    public pushFakeItemByCreationData(creationData: LabelCreationDto): number {
        this.pushItem({
            ...creationData,
            id: -1,
            date: new Date().toJSON()
        });

        return (this.data!.length - 1);
    }

    public updateByEditingData(id: number, editingData: LabelEditingDto): void {
        const itemIndex = this.getItemIndexById(id);
        const item = this.data![itemIndex];
        const newItem = {  ...item, editingData };

        this.updateItemByIndex(newItem, itemIndex);
    }

    protected override getItemId(item: Label): number {
        return item.id;
    }
}

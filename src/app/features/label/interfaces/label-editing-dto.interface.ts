import { Label } from './label.interface';

export interface LabelEditingDto extends Pick<Label, 'name' | 'color'> {}

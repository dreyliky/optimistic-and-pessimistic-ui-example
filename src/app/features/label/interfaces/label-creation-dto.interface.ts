import { Label } from './label.interface';

export interface LabelCreationDto extends Pick<Label, 'name' | 'color'> {}

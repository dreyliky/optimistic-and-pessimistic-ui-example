import { FormControl } from '@angular/forms';

declare global {
    type FormGroupDef<T> = {
        [K in keyof T]: FormControl<T[K]>;
    };
}

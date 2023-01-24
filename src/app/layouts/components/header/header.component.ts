import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRouteEnum } from '@core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    public readonly routeEnum = AppRouteEnum;
}

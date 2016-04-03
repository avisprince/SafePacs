import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from '../home/home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['app/content/styles.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/**', redirectTo: ['Home'] }
])
export class AppComponent { }

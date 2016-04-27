import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderBarComponent} from '../header-bar/header-bar.component';
import {HomeComponent} from '../home/home.component';
import {ExpertsComponent} from '../experts/experts.component';
import {CaseDetailsComponent} from '../case-details/case-details.component';
import {FooterBarComponent} from '../footer-bar/footer-bar.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderBarComponent, FooterBarComponent]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/casedetails', name: 'CaseDetails', component: CaseDetailsComponent, useAsDefault: true },
    { path: '/experts', name: 'Experts', component: ExpertsComponent },
    { path: '/**', redirectTo: ['Home'] }
])
export class AppComponent { }

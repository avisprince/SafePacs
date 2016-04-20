import {Component} from 'angular2/core';

import {HomeGrid} from '../home-grid/home-grid.component';

@Component({
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: ['app/content/home.css'],
    directives: [HomeGrid]
})
export class HomeComponent {
    public credits: number = 8;
}
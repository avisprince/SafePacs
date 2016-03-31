import {Component} from 'angular2/core';
import {HomeComponent} from '../home/home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['app/content/styles.css'],
    directives: [HomeComponent]
})
export class AppComponent { }

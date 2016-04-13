import {Component} from 'angular2/core';

import {Case} from '../../model/case';
import {CaseService} from '../../service/cases.service';

import * as wjGrid from 'wijmo/wijmo.angular2.grid';

@Component({
    directives: [wjGrid.WjFlexGrid],
    templateUrl: 'app/components/home-grid/home-grid.component.html',
    selector: 'home-grid',
})
export class HomeGrid {
    data = new CaseService().getCases();    
}
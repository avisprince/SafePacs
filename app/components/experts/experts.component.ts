import {Component} from 'angular2/core';

import {Case} from "../../model/case";
import {CaseService} from '../../services/cases.service';

import {Menu} from 'primeng/primeng';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';

@Component({
    templateUrl: 'app/components/experts/experts.component.html',
    styleUrls: ['app/content/experts.css'],
    directives: [Menu, DataTable, Column]
})
export class ExpertsComponent {
    cases: Case[];
    caseService: CaseService;
    
    constructor() {
        this.caseService = new CaseService();
        this.cases = this.caseService.getCases(100);
    }    
}
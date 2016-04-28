import {Component} from 'angular2/core';

import {Case} from "../../model/case/case";
import {CaseService} from '../../services/cases/cases.service';

import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';

@Component({
    templateUrl: 'app/components/case-details/case-details.component.html',
    styleUrls: ['app/content/case-details.css'],
    directives: [DataTable, Column]
})
export class CaseDetailsComponent {
    cases: Case[];
    caseService: CaseService;
    
    constructor() {
        this.caseService = new CaseService();
        this.cases = this.caseService.getCases(100);
    }    
}
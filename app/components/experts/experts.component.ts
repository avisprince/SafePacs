import {Component} from 'angular2/core';

import {Case} from "../../model/case/case";
import {CaseDetails} from "../../model/case-details/case-details";

import {CaseService} from '../../services/cases/cases.service';
import {CaseDetailsService} from "../../services/case-details/case-details.service";

import {Menu} from 'primeng/primeng';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';

import {CaseDetailsDialogComponent} from '../case-details-dialog/case-details-dialog.component';
import {ChangeCaseDialogComponent} from '../change-case-dialog/change-case-dialog.component';

@Component({
    templateUrl: 'app/components/experts/experts.component.html',
    styleUrls: ['app/content/experts.css'],
    directives: [Menu, DataTable, Column, Dialog, CaseDetailsDialogComponent, ChangeCaseDialogComponent]
})
export class ExpertsComponent { 
    cases: Case[];
    caseDetails: CaseDetails;
    displayCaseDetailsDialog: boolean = false;
    displayChangeCaseDialog: boolean = false;
    
    constructor() {
        var caseService = new CaseService();
        this.cases = caseService.getCases(100);
        
        var caseDetailsService = new CaseDetailsService();
        this.caseDetails = caseDetailsService.getCaseDetails();
    }
    
    showCaseDetailsDialog() {
        this.displayCaseDetailsDialog = true;
    }
    
    showChangeCaseDialog() {
        this.displayChangeCaseDialog = true;
    }
}
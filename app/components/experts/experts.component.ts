import {Component} from 'angular2/core';

import {Study} from "../../model/study/study";
import {CaseDetails} from "../../model/case-details/case-details";

import {StudiesService} from '../../services/studies/studies.service';
import {CaseDetailsService} from "../../services/case-details/case-details.service";

import {Menu} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';

import {StudiesTableComponent} from '../studies-table/studies-table.component';
import {CaseDetailsDialogComponent} from '../case-details-dialog/case-details-dialog.component';
import {ChangeCaseDialogComponent} from '../change-case-dialog/change-case-dialog.component';

@Component({
    templateUrl: 'app/components/experts/experts.component.html',
    styleUrls: ['app/content/experts.css'],
    directives: [Menu, Dialog, StudiesTableComponent, CaseDetailsDialogComponent, ChangeCaseDialogComponent]
})
export class ExpertsComponent {
    public caseId: string = "";
    public caseDetails: CaseDetails;
    public displayCaseDetailsDialog: boolean = false;
    public displayChangeCaseDialog: boolean = false;
    
    constructor() {
        // Show the change case dialog when user loads the page
        this.showChangeCaseDialog();
    }
    
    getCaseInformation(): void {
        var caseDetailsService = new CaseDetailsService();
        this.caseDetails = caseDetailsService.getCaseDetails(this.caseId);
    }
    
    showCaseDetailsDialog(): void {
        this.displayCaseDetailsDialog = true;
    }
    
    showChangeCaseDialog(): void {
        this.displayChangeCaseDialog = true;
    }
    
    changeSelectedCase(event): void {
        this.caseId = event.value;
        this.getCaseInformation();
        this.displayChangeCaseDialog = false;
    }
}
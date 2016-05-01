import {Component, Input} from 'angular2/core';

import {CaseDetails} from "../../model/case-details/case-details";

@Component({
    selector: 'case-details-dialog',
    templateUrl: 'app/components/case-details-dialog/case-details-dialog.component.html',
})
export class CaseDetailsDialogComponent {
    @Input() caseDetails: CaseDetails;
}
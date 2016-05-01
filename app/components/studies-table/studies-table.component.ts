import {Component, Input, OnChanges, SimpleChange} from 'angular2/core';

import {Study} from "../../model/study/study";
import {StudiesService} from '../../services/studies/studies.service';

import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {Checkbox} from 'primeng/primeng';

@Component({
    selector: 'studies-table',
    templateUrl: 'app/components/studies-table/studies-table.component.html',
    directives: [DataTable, Column, Checkbox]
})
export class StudiesTableComponent implements OnChanges {
    @Input() caseId: string;
    
    private studiesService: StudiesService;
    
    public studies: Study[];
    public selectedStudies: number[] = [];
    
    constructor() {
        this.studiesService = new StudiesService();
    }
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.caseId = changes['caseId'].currentValue;
        this.getStudies();
    }
    
    getStudies() {
        this.studies = this.studiesService.getStudies(this.caseId);
    }
}
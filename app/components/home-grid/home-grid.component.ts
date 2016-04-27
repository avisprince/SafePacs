import {Component} from 'angular2/core';

import {Case} from '../../model/case';
import {CaseService} from '../../services/cases.service';

import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';

@Component({
    templateUrl: 'app/components/home-grid/home-grid.component.html',
    selector: 'home-grid',
    directives: [DataTable, Column]
})
export class HomeGrid {
    public height: number;
    public cases: Case[];
    
    constructor() {
        this.setHeight();
        
        var caseService = new CaseService();
        this.cases = caseService.getCases(100);
    }
    
    onResize(event) {
        this.setHeight();
    }
    
    setHeight() {
        this.height = document.getElementById("main").scrollHeight - 150;
    }
}
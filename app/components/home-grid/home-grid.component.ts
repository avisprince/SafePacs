import {Component} from 'angular2/core';

import {Case} from '../../model/case';
import {CaseService} from '../../services/cases.service';

import * as wjGrid from 'wijmo/wijmo.angular2.grid';

@Component({
    directives: [wjGrid.WjFlexGrid],
    templateUrl: 'app/components/home-grid/home-grid.component.html',
    selector: 'home-grid',
})
export class HomeGrid {
    private _filter: string = '';
    private _toFilter: any;
    
    public height: number;
    public data: wijmo.collections.CollectionView;
    
    constructor() {
        this.setHeight();
        
        var caseService = new CaseService();
        this.data = new wijmo.collections.CollectionView(caseService.getCases(100));
        this.data.pageSize = 20;
        this.data.filter = this.filterFunction.bind(this);
    }
    
    onResize(event) {
        this.setHeight();
    }
    
    setHeight() {
        //this.height = document.body.scrollHeight - 120;
        this.height = document.getElementById("main").scrollHeight - 50;
    }
    
    get filter(): string {
        return this._filter;
    }
    
    set filter(value: string) {
        if (this._filter != value) {
            this._filter = value;
            if (this._toFilter) {
                clearTimeout(this._toFilter);
            }
            var self = this;
            this._toFilter = setTimeout(function () {
                self.data.refresh();
            }, 500);
        }
    }

    private filterFunction(item: any) {
        if (this._filter) {
            return item.Caption.toLowerCase().indexOf(this._filter.toLowerCase()) > -1 ||
                   item.Owner.toLowerCase().indexOf(this._filter.toLowerCase()) > -1;
        }
        
        return true;
    }
}
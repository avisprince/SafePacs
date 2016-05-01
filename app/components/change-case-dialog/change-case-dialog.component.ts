import {Component, Output, EventEmitter} from 'angular2/core';

import {InputText} from 'primeng/primeng';
import {Button} from 'primeng/primeng';

@Component({
    selector: 'change-case-dialog',
    templateUrl: 'app/components/change-case-dialog/change-case-dialog.component.html',
    directives: [InputText, Button],
})
export class ChangeCaseDialogComponent {
    public caseAccessCode: string;
    @Output() changeSelectedCase = new EventEmitter();
    
    onKeyUp(event:KeyboardEvent) {
        if (event.keyCode == 13 && this.caseAccessCode) {
            this.lookupCase();
        }
    }
    
    lookupCase() {
        this.changeSelectedCase.emit({
            value: this.caseAccessCode
        });
    }
}
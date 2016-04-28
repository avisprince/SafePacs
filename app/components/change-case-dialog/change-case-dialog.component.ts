import {Component} from 'angular2/core';

import {InputText} from 'primeng/primeng';
import {Button} from 'primeng/primeng';

@Component({
    selector: 'change-case-dialog',
    templateUrl: 'app/components/change-case-dialog/change-case-dialog.component.html',
    directives: [InputText, Button],
})
export class ChangeCaseDialogComponent { 
    lookupStudy() {
        
    }
}
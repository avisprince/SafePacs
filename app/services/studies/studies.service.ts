import {Injectable} from 'angular2/core';

import {Study} from '../../model/study/study';

@Injectable()
export class StudiesService {
    getStudies(caseId: string) {
        var data : Study[] = [];
        
        for (var i = 0; i < 30; i++) {
            data.push({
                Id: i,
                Type: "CR",
                Description: "This is from case " + caseId,
            });
        }
        
        return data;
    }
}
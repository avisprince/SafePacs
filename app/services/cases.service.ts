import {Injectable} from 'angular2/core';

import {Case} from '../model/case';

@Injectable()
export class CaseService {
    getCases(count: number) : wijmo.collections.ObservableArray {
        var owners = ['Avi','Robin','David','Elliot','Eitan','Leora','Cheryl'];
        var data = new wijmo.collections.ObservableArray();
        
        for (var i = 0; i < count; i++) {
            data.push({
                Id: i,
                Caption: "Case " + Math.random() * 1000,
                Owner: owners[i % owners.length],
                DiscoveryDate: new Date(2015, i%12, i%28),
                ExpirationDate: new Date(2015, i%12+1, i%28),
            });
        }
        
        return data;
    }
}
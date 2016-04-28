import {Injectable} from 'angular2/core';

import {Case} from '../../model/case/case';

@Injectable()
export class CaseService {
    getCases(count: number) {
        var owners = ['Avi','Robin','David','Elliot','Eitan','Leora','Cheryl'];
        var data : Case[] = [];
        
        for (var i = 0; i < count; i++) {
            data.push({
                Id: i,
                Caption: "Case " + Math.ceil(Math.random() * 1000),
                Owner: owners[i % owners.length],
                DiscoveryDate: new Date(2015, i%12, i%28).toLocaleDateString(),
                ExpirationDate: new Date(2015, i%12+1, i%28).toLocaleDateString(),
            });
        }
        
        return data;
    }
}
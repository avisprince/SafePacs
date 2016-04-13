import {Injectable} from 'angular2/core';

import {Case} from '../model/case';

@Injectable()
export class CaseService {
    getCases() : Case[] {
        return [
            {Id: 1, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
            {Id: 2, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
            {Id: 3, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
            {Id: 4, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
            {Id: 5, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
            {Id: 6, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
            {Id: 7, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
            {Id: 8, Caption: "Case", Owner: "Avi", DiscoveryDate: new Date() },
        ];
    }
}
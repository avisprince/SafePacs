import {Injectable} from 'angular2/core';

import {CaseDetails} from '../../model/case-details/case-details';

@Injectable()
export class CaseDetailsService {
    getCaseDetails(caseId: string) : CaseDetails {
        return {
            CaseId: caseId,
            Caption: "Caption for case:" + caseId,
            ExpertAccessCode: "Expert Access Code",
            FirstName: "First Name",
            MiddleName: "Middle Name",
            LastName: "Last Name",
            DateOfBirth: "10/18/1985",
            Gender: "Male",
            CreationDate: "08/14/2001",
            ExpirationDate: "04/12/2010",
            DiscoveryEndDate: "03/20/2015",
            Status: "Done",
            Owner: "Abe Lincoln",
        };
    }
}
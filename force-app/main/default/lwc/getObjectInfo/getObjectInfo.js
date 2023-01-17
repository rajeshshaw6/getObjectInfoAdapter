import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
export default class GetObjectInfo extends LightningElement {
    defaultRecordTypeId;
    apiName;
    objectApiNames = [ACCOUNT_OBJECT,OPPORTUNITY_OBJECT];
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error})
    {
        if(data)
        {
            console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            this.apiName = data.apiName;
        }
        if(error)
        {
            console.error(error);
        }
    }
    objectInfos
    @wire(getObjectInfos,{objectApiNames:'$objectApiNames'})
    objectInfosHandler({data}){
        if(data)
        {
            console.log(data);
            this.objectInfos = data;
        }
    }
}
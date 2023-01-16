import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import NAME_FIELD from '@salesforce/schema/User.Name';
const userFields = [EMAIL_FIELD, NAME_FIELD];
export default class WireUserDetail extends LightningElement {
    userId = Id;
    userDetail;
    //0051m000004XZSkAAO
    // @wire(adapter,{adapterConfig})
    // propertyorfunction

    //IF you use {recordId:userId} then it will throw error beacuse import id is asynchronous operation and @wire is called before import statement so 
    //id is not available at that time and it throws error. So to make the @wire reactive we use $ symbol {recordId:'$userId'} , 
    //so when the userId is available again it loads the @wire and shows the result, Conclusion use $symbol with {recordId:'$userId'}
    @wire(getRecord, { recordId: '$userId', fields: userFields }) // OR @wire(getRecord,{recordId:'0051m000004XZSkAAO',fields:userFields})
    userDetailHandler({ data, error }) {
        if (data) {
            this.userDetail = data.fields;
            console.log(this.userDetail);
        }
        if (error) {
            console.error(error);
        }
    }
    @wire(getRecord, { recordId: '$userId', fields: userFields })
    userDetailProperty;
}
import { LightningElement,wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import NAME_FIELD from '@salesforce/schema/User.Name';
const userFields = [EMAIL_FIELD,NAME_FIELD];
export default class WireUserDetail extends LightningElement {
    userId = Id;
    userDetail;
    //0051m000004XZSkAAO
    // @wire(adapter,{adapterConfig})
    // propertyorfunction

   
    @wire(getRecord,{recordId:'0051m000004XZSkAAO',fields:userFields})
    userDetailHandler({data,error})
    {
       if(data)
       {
        this.userDetail = data.fields;
        console.log(this.userDetail);
       }
       if(error)
       {
        console.error(error);
       }
    }
    @wire(getRecord,{recordId:'0051m000004XZSkAAO',fields:userFields})
    userDetailProperty;
}
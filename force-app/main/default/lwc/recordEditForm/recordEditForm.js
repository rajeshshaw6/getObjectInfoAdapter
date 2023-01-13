import { LightningElement,api } from 'lwc';
import OBJECT_NAME from '@salesforce/schema/Contact'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class RecordEditForm extends LightningElement {
    objectName = OBJECT_NAME;
    fields = {
        accountField:ACCOUNT_FIELD,
        nameField:NAME_FIELD,
        titleField:TITLE_FIELD,
        phoneField:PHONE_FIELD,
        emailField:EMAIL_FIELD
    }
    handleReset()
    {
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        Array.from(inputFields).forEach((fields) => {          //looping through each element in the array, i.e each field
            fields.reset();                 //to reset each field on clicking cancel button
        });
        
    }
}
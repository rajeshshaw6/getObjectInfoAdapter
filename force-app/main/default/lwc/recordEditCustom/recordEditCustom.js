import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue;
    handleChange(event)
    {
        this.inputValue = event.target.value;
    }
    handleSubmit(event)
    {
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;
        console.log('Value is:'+ value);
        console.log('Fields are: ' + event.detail.fields);
        console.log('Id is:' + event.detail.id);
        if(!value.includes('India')){
            inputCmp.setCustomValidity('The account name must include India');

        } 
        else{
            inputCmp.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputCmp.reportValidity();
    }
    successHandler(event)
    {
        const toastEvent = new ShowToastEvent({
            title:'Account has been created Successfully',
            message:'Rcord ID:' + event.detail.id,
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    }
    handleError(event)
    {
        const toastEvent = new ShowToastEvent({
            title:'Error Creating Account',
            message:event.detail.message,
            variant:'error'
        });
        this.dispatchEvent(toastEvent);
    }
}
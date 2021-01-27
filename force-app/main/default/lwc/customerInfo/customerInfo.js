
import { LightningElement, track} from 'lwc';

// Importing Apex Class method
import saveCusInfo from '@salesforce/apex/CustomerInformationController.saveCusInfoRecord';

// importing to show toast notifictions
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

// importing Account fields

import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import Phone_FIELD from '@salesforce/schema/Customer__c.Mobile_Number__c';
import EmailID_FIELD from '@salesforce/schema/Customer__c.EmailId__c';
import PAdd_FIELD from '@salesforce/schema/Customer__c.Pickup_Address__c';
import Pcity_FIELD from '@salesforce/schema/Customer__c.Pickup_City__c';
import PState_FIELD from '@salesforce/schema/Customer__c.Pickup_State__c';
import DAdd_FIELD from '@salesforce/schema/Customer__c.Delivery_Address__c';
import Dcity_FIELD from '@salesforce/schema/Customer__c.Delivery_City__c';
import DState_FIELD from '@salesforce/schema/Customer__c.Delivery_State__c';

export default class CreateRecordInLWC extends LightningElement {
    @track error;
    
    // this object have record information
    @track cusInfoRecord = {
        Name : NAME_FIELD,
        EmailId : EmailID_FIELD,
        Phone : Phone_FIELD,  
        PAdd : PAdd_FIELD,
        Pcity : Pcity_FIELD,
        PState : PState_FIELD,
        DAdd : DAdd_FIELD,
        Dcity : Dcity_FIELD,
        DState : DState_FIELD
    };

    handleNameChange(event) {
        this.cusInfoRecord.Name = event.target.value;
        window.console.log('Name ==> '+this.cusInfoRecord.Name);
    }

    handlePhoneChange(event) {
        this.cusInfoRecord.Phone = event.target.value;
        window.console.log('Phone ==> '+this.cusInfoRecord.Phone);
    }

    handleTypeChange(event) {
        this.cusInfoRecord.EmailId = event.target.value;
        window.console.log('Type ==> '+this.cusInfoRecord.EmailId);
    }
    handleIndustryChange(event) {
        this.cusInfoRecord.PAdd = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.PAdd);
    }
    handlePcity(event) {
        this.cusInfoRecord.Pcity = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.Pcity);
    }

    handlePState(event) {
        this.cusInfoRecord.PState = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.PState);
    }
    handleDAdd(event) {
        this.cusInfoRecord.DAdd = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.Dcity);
    }

    handleDcity(event) {
        this.cusInfoRecord.Dcity = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.Dcity);
    }

    handleDState(event) {
        this.cusInfoRecord.DState = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.DState);
    }

    handleSave() {
        saveCusInfo({objCinfo: this.cusInfoRecord})
        .then(result => {
            // Clear the user enter values
            this.cusInfoRecord = {};

            window.console.log('result ===> '+result);
            // Show success messsage
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Account Created Successfully!!',
                variant: 'success'
            }),);
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error'
                }),
            );
        });
    }
}


//export default class CustomerInformation extends LightningElement {}
/*import { LightningElement, track} from 'lwc';

// Importing Apex Class method
import saveCusInfo from '@salesforce/apex/CustomerInformationController.saveCusInfoRecord';

// importing to show toast notifictions
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

// importing Customer fields
import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import Phone_FIELD from '@salesforce/schema/Customer__c.Mobile_Number__c';
import EmailID_FIELD from '@salesforce/schema/Customer__c.EmailId__c';
import PAdd_FIELD from '@salesforce/schema/Customer__c.Pickup_Address__c';
import Pcity_FIELD from '@salesforce/schema/Customer__c.Pickup_City__c';
import PState_FIELD from '@salesforce/schema/Customer__c.Pickup_State__c';
import DAdd_FIELD from '@salesforce/schema/Customer__c.Delivery_Address__c';
import Dcity_FIELD from '@salesforce/schema/Customer__c.Delivery_City__c';
import DState_FIELD from '@salesforce/schema/Customer__c.Delivery_State__c';


export default class CreateRecordInLWC extends LightningElement {
    @track error;

    // this object have record information
    @track cusInfoRecord = {
        Name : NAME_FIELD,
        EmailId : EmailID_FIELD,
        Phone : Phone_FIELD,
        PAdd : PAdd_FIELD,
        Pcity : Pcity_FIELD,
        PState : PState_FIELD,
        DAdd : DAdd_FIELD,
        Dcity : Dcity_FIELD,
        DState : DState_FIELD
    };


    handleNameChange(event) {
        this.cusInfoRecord.Name = event.target.value;
        window.console.log('Name ==> '+this.cusInfoRecord.Name);
    }

    handlePhoneChange(event) {
        this.cusInfoRecord.Phone = event.target.value;
        window.console.log('Phone ==> '+this.cusInfoRecord.Phone);
    }

    handleTypeChange(event) {
        this.cusInfoRecord.EmailId = event.target.value;
        window.console.log('Type ==> '+this.cusInfoRecord.EmailId);
    }

    handlePAdd(event) {
        this.cusInfoRecord.PAdd = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.PAdd);
    }

    handlePcity(event) {
        this.cusInfoRecord.Pcity = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.Pcity);
    }

    handlePState(event) {
        this.cusInfoRecord.PState = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.PState);
    }

    handleDAdd(event) {
        this.cusInfoRecord.DAdd = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.Dcity);
    }

    handleDcity(event) {
        this.cusInfoRecord.Dcity = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.Dcity);
    }

    handleDState(event) {
        this.cusInfoRecord.DState = event.target.value;
        window.console.log('Industry ==> '+this.cusInfoRecord.DState);
    }

    handleSave() {
        
        saveCusInfo({objCinfo: this.cusInfoRecord})
        .then(result => {
            window.console.log('result ===> '+this.cusInfoRecord);
            // Clear the user enter values
            this.cusInfoRecord = {};

            window.console.log('result ===> '+result);
            // Show success messsage
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Account Created Successfully!!',
                variant: 'success'
            }),);
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error'
                }),
            );
        });
    }
}*/
import { LightningElement,wire } from 'lwc';
import { getPicklistValues,getObjectInfo  } from 'lightning/uiObjectInfoApi';
import PROPERTY_OBJECT from '@salesforce/schema/Property__c';
import COUNTRY_FIELD from '@salesforce/schema/Property__c.Country__c';
import CITY_FIELD from '@salesforce/schema/Property__c.City__c';
import  getProperties from '@salesforce/apex/propertyAppController.getProperties';

export default class PropertySearch extends LightningElement {
    properties;
    country;
    city;
    countryOptions;
    cityOptions;
    
    @wire(getObjectInfo, { objectApiName: PROPERTY_OBJECT }) propertyMetadata;
    @wire(getPicklistValues, { recordTypeId: '$propertyMetadata.data.defaultRecordTypeId', fieldApiName: COUNTRY_FIELD })countryValues({data,error}){
        if(data){
            console.log('country'+JSON.stringify(data));
            this.countryOptions = data.values;
        }
        if(error){
            console.error(error);
        } 
    };
    @wire(getPicklistValues, { recordTypeId: '$propertyMetadata.data.defaultRecordTypeId', fieldApiName: CITY_FIELD })cityValues({data,error}){
        if(data){
            console.log('city'+JSON.stringify(data));
            this.cityOptions = data.values;
        }
        if(error){
            console.error(error);
        } 
    };
    handleCountryChange(event){

            this.country=event.detail.value;
    }
    handleCityChange(event){
       this.city= event.detail.value;
    }
    searchProperties(){
        getProperties({country: this.country, city:this.city})
        .then((result)=>{
           this.properties = result;
           if(this.properties){
            const propsearch = new CustomEvent('propsearch',{detail: this.properties });
            this.dispatchEvent(propsearch);
        }
           console.log('RESULT========>'+JSON.stringify(this.properties)+' '+Array.isArray(result));         
        }).catch((error)=>{
            console.log('ERROR=========>'+JSON.stringify(error));
        });


    }
}
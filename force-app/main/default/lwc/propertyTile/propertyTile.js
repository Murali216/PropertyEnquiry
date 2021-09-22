import { LightningElement, wire,api } from 'lwc';
// import { getRecord } from 'lightning/uiRecordApi';
// import NAME_FIELD from '@salesforce/schema/Property__c.Name';
// //import OWNER_NAME_FIELD from '@salesforce/schema/Property__c.Owner.Name';
// import PROP_AREA from '@salesforce/schema/Property__c.Carpert_Area__c';
// import PROP_IMAGE from '@salesforce/schema/Property__c.Property_Main_Image__c';

export default class PropertyTile extends LightningElement {
    @api prop; 
    
     get propertyName(){
         if(this.prop)
         {
           return this.prop.Name; 
        }return '';
     };
    get propImage(){
        if(this.prop)
        {
        return this.prop.Property_Main_Image__c;
        }return '';
    };
    get propOwner(){
        if(this.prop)
        {
        return this.prop.Owner.Name;
        }return '';
    };
    get carpetArea(){
        if(this.prop)
        {
        return this.prop.Carpert_Area__c;
        }
        return '';
    };
     
     
//    @wire(getRecord, { recordId: 'a001D000004QO7rQAG', fields: [NAME_FIELD, 'Property__c.Owner.Name',PROP_AREA,PROP_IMAGE]})
//    wiredRecord({data,error}){
//        if(data){
//            console.log('Data'+JSON.stringify(data));
//            this.property = data.fields;
//            this.propertyName =this.property.Name.value;
//            this.propImage = this.property.Property_Main_Image__c.value;
//             this.propOwner = this.property.Owner.displayValue;
//             this.carpetArea = this.property.Carpert_Area__c.value;
//            console.log('Property '+JSON.stringify(this.property));
//        }
//        if(error){
//            console.error(error);
//        }
//    };

   get isPropertyFound(){
       if(this.prop){
           return true;
       }
       return false;
   }
   
//    get propertyName(){
//        console.log('property'+this.property);
//        if(this.property){
//         return this.property.Name.value;
//        console.log(this.property.Name.value);
//     }
//        return '';
//    }

}
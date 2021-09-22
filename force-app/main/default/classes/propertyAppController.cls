public with sharing class propertyAppController {
    @AuraEnabled
     public static list<property__c> getProperties(string country,string city){
        try {

            return [select id,name, owner.Name, Carpert_Area__c,Property_Main_Image__c from property__c where country__c=:country and city__c=:city];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

import { LightningElement,api } from 'lwc';

export default class PropertySearchResult extends LightningElement {
    // @api properties = [{"Carpert_Area__c":1500,
    // "Property_Main_Image__c":"<p><img src=\"https://force-velocity-754-dev-ed--c.documentforce.com/servlet/rtaImage?eid=a001D000004QO7r&amp;feoid=00N1D00000LXrPG&amp;refid=0EM1D000000E3OU\" alt=\"Avatar.png\"></img></p>",
    // "Owner":{"Name":"User User","Id":"0051D000007Wm9RQAS"},
    // "Id":"a001D000004QO7rQAG",
    // "OwnerId":"0051D000007Wm9RQAS",
    // "Name":"Sunrise Villa"},
    // {"Carpert_Area__c":1800,
    // "Property_Main_Image__c":"<p><img src=\"https://force-velocity-754-dev-ed--c.documentforce.com/servlet/rtaImage?eid=a001D000004QO7r&amp;feoid=00N1D00000LXrPG&amp;refid=0EM1D000000E3OU\" alt=\"Avatar.png\"></img></p>",
    // "Owner":{"Name":"Murali R","Id":"0051D000007Wm9RQAS"},
    // "Id":"a001D000004QO7rQAS",
    // "OwnerId":"0051D000007Wm9RQAS",
    // "Name":"Sunset Villa"}];
    @api properties;


    get isProp(){
        if(this.properties!=undefined && this.properties!=''){
            return true;
        }
        return false;
      
    }
}
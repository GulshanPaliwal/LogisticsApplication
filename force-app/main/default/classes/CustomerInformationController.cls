public inherited  sharing class CustomerInformationController {
  
    @AuraEnabled
    public static void saveCusInfoRecord(Customer__c objCinfo){
        try{
            insert objCinfo;
   
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}

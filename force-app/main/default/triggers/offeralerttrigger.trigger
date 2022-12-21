trigger offeralerttrigger on Product_Offer__c (after insert) {

        if (trigger.isinsert && trigger.isafter){
        offeralert.offermail(trigger.new);
    }
    
}
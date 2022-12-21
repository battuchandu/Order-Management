trigger alertmail on Order__c (before insert,after insert, before update, before delete) {
    
    if (trigger.isinsert && trigger.isafter){
        emailalert.afterinsert(trigger.new);
    }
    
    if(trigger.isupdate && trigger.isbefore){
        emailalert.afterupdate(trigger.old,trigger.new);
    }

}
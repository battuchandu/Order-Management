trigger CreateComminityuser on Contact (after insert) {
    if(trigger.isInsert && trigger.isafter){
        Create_Communityuser.createuser(trigger.new);
    }
}
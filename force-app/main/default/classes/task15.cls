public class task15 {
    @AuraEnabled
    public static List<Order__c> fetchorder(string cname){
        list<contact> cid=[select id from contact where Name=:cname];
        list<Order__c> odlist = [SELECT Id,Name,Customer__c,Expected_Delivery_Date__c,Total__c,Shipping_Address__c,	Billing_Address__c FROM Order__c  where Customer__c=:cid];
        return odlist; 
    } 
    @AuraEnabled
    public static List<Order__c> statuscheck(string uname)
    {
        list<contact> uid=[select id from contact where Name=:uname];
        list<Order__c> odlist = [SELECT Id,Name,Expected_Delivery_Date__c,Total__c,Shipping_Address__c,Status__c,Billing_Address__c FROM Order__c where Customer__c=:uid];
        list<Order__c> checklist=new list<Order__c>();
        if(odlist!=null)
        {
            for(Order__c c:odlist)
            {
                if(c.Status__c=='In process'|| c.Status__c=='Open')
                {
                    checklist.add(c);
                }    
            }  
        }
        
        return checklist;    
    }
    @AuraEnabled
    public static list<Order__c>  deleterecord(Id recorddeleteId)
    {
        list<Order__c> od=[select id,Name,Customer__c,Status__c from Order__c where id=:recorddeleteId];
        for(Order__c o:od){
            o.Status__c='Cancelled';
            update o;
        }
        return od;        
    }
    @AuraEnabled
    public static list<Order__c>  updaterecord(Id reorderid)
    {
        list<Order__c> odd=[select id,Name,Customer__c,Status__c from Order__c where id=:reorderid];
        for(Order__c order:odd){
            order.Status__c='Open';
            update order;
        }
        return odd;        
    }
}
public class ApplyCoupon {
    @AuraEnabled
    public static string applied(string coupcode){
        Decimal discamount ;
        system.debug(coupcode);
        list<Coupon__c> coupname =[select id,Name,Type__c,Flat_Discount__c,Discount__c from Coupon__c where Name=:coupcode];
        if(coupname.size()>0)
        {
            
            string typ = coupname[0].Type__c ;
            if(typ == 'Flat')
            {
                system.debug(coupname[0].Flat_Discount__c);
                Decimal flatdisc = coupname[0].Flat_Discount__c;
                discamount=flatdisc;
            }
            system.debug(discamount);
            
            return 'valid';
        }
        else{
            system.debug('invalid');
            return 'Invalid';
        }
    }
}
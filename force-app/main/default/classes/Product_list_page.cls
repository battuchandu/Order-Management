public class Product_list_page {
    /*  @AuraEnabled(cacheable=true)
public static map<Product2,list<Product_Image__c>> prds(){
list<Product2> pd = [select id,name,Inventory__c,Discount__c,Price__c,Remaining_Quantity__c from Product2];
map<Product2,list<Product_Image__c>> mp = new map<Product2,list<Product_Image__c>>();
list<object> pds = new list<object>();
for(Product2 prd : pd){
list<Product_Image__c> pdi = [select id,HeroImage__c,Type__c,Resource__c,ResourceURL__c,URL__c from Product_Image__c where Product__c =: prd.id];
mp.put(prd,pdi);
}
return mp;
}*/
     @AuraEnabled(cacheable=true)
    public static list<Productnimage> getPrdimg(string catg){
        list<Productnimage> pdimg = new list<Productnimage>(); 
        list<Product2> pd =new list<Product2>();
        if (catg=='all'){
            pd = [select id,name,Inventory__c,Discount__c,Price__c,Remaining_Quantity__c from Product2];
        }else{
            pd = [select id,name,Inventory__c,Discount__c,Price__c,Remaining_Quantity__c from Product2 where name=:catg];
        }
        for(Product2 prd : pd){
            list<Product_Image__c> pdi = [select id,HeroImage__c,Type__c,Resource__c,ResourceURL__c,URL__c from Product_Image__c where Product__c =: prd.id];
            list<Product_Image__c> hpdi = [select id,HeroImage__c,Type__c,Resource__c,ResourceURL__c,URL__c from Product_Image__c where Product__c =: prd.id and HeroImage__c =: true];
            Productnimage pimg = new Productnimage();
            if(pdi.size()!=0 ){               
                pimg.prdt = prd;
                pimg.Prdimg = pdi;                
                if(hpdi.size()!=0){
                    pimg.hprdimg = hpdi[0];  
                }else{
                    pimg.hprdimg = pdi[0]; 
                }
                pdimg.add(pimg);
            }   
        }
        return pdimg;
    }
     @AuraEnabled(cacheable=true)
    Public static list<Productnimage> prd(string iD){
        list<Productnimage> pdimg = new list<Productnimage>();
        list<Product2> pd = [select id,name,Inventory__c,Discount__c,Price__c,Remaining_Quantity__c,Description from Product2 where id=:iD];
        list<Product_Image__c> pdi = [select id,HeroImage__c,Type__c,Resource__c,ResourceURL__c,URL__c from Product_Image__c where Product__c =: pd[0].id];
        list<Product_Image__c> hpdi = [select id,HeroImage__c,Type__c,Resource__c,ResourceURL__c,URL__c from Product_Image__c where Product__c =: pd[0].id and HeroImage__c =: true];
        Productnimage pimg = new Productnimage();
        if(pdi.size()!=0 ){               
            pimg.prdt = pd[0];
            pimg.Prdimg = pdi;                
            if(hpdi.size()!=0){
                pimg.hprdimg = hpdi[0];  
            }else{
                pimg.hprdimg = pdi[0]; 
            }
            pdimg.add(pimg);
        }
        return pdimg;
    }
    public class Productnimage {
        @AuraEnabled
        Public Product2 prdt{get;set;}
        @AuraEnabled
        Public list<Product_Image__c> Prdimg{get;set;}
        @AuraEnabled 
        Public Product_Image__c hprdimg{get;set;}
    }
    
    //Add to cart button   
    //
     @AuraEnabled
    public static void method(id productid, integer items)
    {
       Addtocart.addtocartmeth1(productid,items);
    }
}
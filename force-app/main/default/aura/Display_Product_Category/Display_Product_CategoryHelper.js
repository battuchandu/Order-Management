({
    /*Calling Apex class from the component to Search the Product*/
    
    searchingProductHlpr : function(component, event, helper)
    {
        // calling apex method
        var action = component.get("c.getProductList");
        action.setParams({
            'srchStr' : component.get("v.searchProduct")
        });
        
         action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                component.set("v.productList",response.getReturnValue());
            }
            else{
                window.alert("Some Error while calling apex")
            }
        });
        $A.enqueueAction(action);
        
        
    },
    
    
    
    /* Here in the View detail button will get the entire details of the Product*/ 
    
     viewRecordDetailtHlpr : function(component, event, helper)
    {
      
        //navigating event taking from component library
        var eventSource = event.getSource();
        var id = eventSource.get('v.name');
        alert('Navigating to Product Details');
        var navEvt = $A.get("e.force:navigateToSObject");
       
        //setting paramametres
        navEvt.setParams({
            "recordId": id,
            "slideDevName": "detail"
        });
        
        navEvt.fire();
    },
    
 /*   navigatetoPrdlist_hpr : function(component,event,helper){
        var catg = component.get("v.searchProduct");
        var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:Products_listpage",
        componentAttributes: {
            Category : catg,
        }
    });
    evt.fire();
    } 
*/
    
})



/*viewRecordDetailtHlpr*/
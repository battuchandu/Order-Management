({
    getProducts_hpr : function(component,event,helper) {
        var action = component.get("c.getPrdimg");
        action.setParams({
            'catg' : component.get("v.Category")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state==="SUCCESS"){
                var result = response.getReturnValue();                
                component.set("v.Prdts",result);
                for(let index in result){
                    result[index].quantity = 0;
                }
                console.log(result);
            }
            else
            {
                window.alert("Error on loading");
            }
        }
                          );
        $A.enqueueAction(action);
    },
    
    quantity_hpr : function(component,event,helper){
        
        //var val=component.get('v.Quantity')
        var buttonid = event.getSource().get("v.value")
        var v = component.get("v.Prdts");
        var index = v.findIndex(item => item.prdt.Id=== buttonid)
        var val = v[index].quantity;
        
        var lbl = event.getSource().get("v.label");
        if(lbl=='+'){
            val = val + 1
        }else if(lbl=='-'){            
            val = val -1
            if (val<0){
                val = 0
            }
        }     
        //component.set('v.Quantity',val)
        v[index].quantity = val;
        component.set("v.Prdts",v)
        
    }
})
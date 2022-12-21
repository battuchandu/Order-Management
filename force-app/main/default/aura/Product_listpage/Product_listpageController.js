({
    getProducts : function(component, event, helper) {
        helper.getProducts_hpr(component, event, helper);
    },
    
    addtocart : function (component, event, helper) {
        // var buttonstate = cmp.get('v.buttonstate');
        // cmp.set('v.buttonstate', true);
        // console.log(event.getSource().get("v.value"));
        var buttonid = event.currentTarget.id ;
        var v = component.get('v.Prdts');
        var index = v.findIndex(item => item.prdt.Id=== buttonid)
        console.log(v[index].quantity);
        console.log(buttonid);
        component.find('showModal').showChildModal(true);
        
        var action = component.get("c.method");
        action.setParams({
            'productid' : buttonid ,
            'items' : v[index].quantity
        });
        console.log(action);
        
        $A.enqueueAction(action);	
    },
    
    
    /*    qntyup : function(component,event,helper){
        //console.log(event.target.dataset.id)
        //console.log(event.currentTarget.id)
        //console.log(event.target.getAttribute("data-value"))
        //console.log(event.target.dataset.value)
        //console.log(event.target.value)
        console.log('up');
        //console.log(event.getSource().get("v.value"));
        //console.log(document.getElementById('it1').name);
        var  buttonid = event.getSource().get("v.value");
        var divid = document.getElementById('it1').name;
        
        var v = component.get("v.Prdts");
        console.log(v.findIndex(item => item.prdt.Id=== buttonid))
        
        var val=component.get('v.Quantity')+1
        component.set('v.Quantity',val)
        
        
    },
    qntydown : function(component,event,helper){
        console.log('down');
        console.log(event.getSource().get("v.value"));        
        console.log(document.getElementById('it1').name);
        var val=component.get('v.Quantity')-1
        if(val<0){
            component.set('v.Quantity',0)
        }else{
        component.set('v.Quantity',val)
        }
    },
    */
    
    quantity : function(component,event,helper){
        helper.quantity_hpr(component,event,helper);
    },
    
    Prddetails : function(component,event,helper){
        console.log(event.currentTarget.id);
        
        var i = event.currentTarget.id;
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:Products_details",
            componentAttributes: {
                ID : i,
                Prdt : component.get('v.Prdts')
            }
        });
        evt.fire();
    }
})
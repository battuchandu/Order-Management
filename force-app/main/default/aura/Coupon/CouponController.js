({
	handleClick : function(component, event, helper) {
        
       var action=component.get("c.applied");
        var name=component.get("v.inputvalue");
        console.log(name);
        action.setParams({'coupcode':name});
        action.setCallback(this,function(response){  
            var state=response.getState();
            if(state=='SUCCESS'){
                var result=response.getReturnValue();
                component.set("v.returnvalue",result); 
            }
            
            }
        );
        $A.enqueueAction(action);
		
	}
})
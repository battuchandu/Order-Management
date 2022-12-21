({
	prddetail_hpr : function(component,event,helper) {
		var action = component.get("c.prd");
        action.setParams({
            'iD' : component.get('v.ID')
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state==="SUCCESS"){
                var result = response.getReturnValue();
                component.set("v.Prd",result);
                console.log('dd')
                console.log(result);
            }
            else
            {
                window.alert("Error on inserting");
            }
        }
        );
        $A.enqueueAction(action);
	}
	
})
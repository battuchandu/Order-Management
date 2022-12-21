({
    callme : function(component, event, helper) 
    {
        alert('ok');
        var action=component.get("c.adddata");
        var name=component.get("v.cname");
        action.setParams({"uname":name});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.addbook",result);  
            }
        });
        $A.enqueueAction(action);
    }
})
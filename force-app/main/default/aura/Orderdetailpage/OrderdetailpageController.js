({
    callme : function(component, event, helper)
    {
        var action=component.get("c.fetchorder");
        var name=component.get("v.customername");
        
        action.setParams({"cname":name});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.odd",result);
                component.set("v.showcard",true);
                component.set("v.showcard2",false);
            }
        });
        $A.enqueueAction(action);
    },
    check: function(component, event, helper) {
        component.set("v.showcard",false);
        component.set("v.showcard1",true);
        var action=component.get("c.statuscheck");
        var username=component.get("v.customername");
        action.setParams({"uname":username});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.statuscheckeddata",result); 
            }
        });
        $A.enqueueAction(action);
    },
    showModal:function(component, event, helper)
    {
        component.set("v.showModal",true);
        
    },
    hideModel: function(component, event, helper) {
        component.set("v.showModal",false);
        component.set("v.showcard",true);
        component.set("v.showcard1",false);
        
    },
    cancel: function(component, event, helper) {
        component.set("v.showModal",false);
        component.set("v.showcard",false);
        component.set("v.showcard1",false);
        var orderId=component.get("v.recordid");
        console.log(orderId);
        var action=component.get("c.deleterecord");
        action.setParams({"recorddeleteId":orderId});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var result=response.getReturnValue(); 
                alert('Sucessfully cancelled the order');
            }
            
        });
        $A.enqueueAction(action);    
    },
    disable:function(component, event, helper) {
        var selectedCheckbox = event.getSource();
        var recordId = selectedCheckbox.get("v.name");
        component.set("v.recordid",recordId);
        component.set("v.disable",true);
        
    },
    Reorder:function(component, event, helper) {
        component.set("v.showcard",false);
        component.set("v.showcard1",false);
        component.set("v.showcard2",true);
    },
    reorder:function(component, event, helper) {
        var reorderId=component.get("v.recordid");
        var action=component.get("c.updaterecord");
        action.setParams({"reorderid":reorderId});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                var result=response.getReturnValue(); 
                alert('Sucessfully reordered');
            }
            
        });
        $A.enqueueAction(action);     
    }
})
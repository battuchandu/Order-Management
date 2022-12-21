({
	openModal : function(component, event, helper) {
 //we are fetching parameters from event that calls this method.
 var params = event.getParam( 'arguments' ) || event.getParams();
 component.set('v.isOpen',params.openModal);
 },
 
 closeModal : function(component, event, helper) {
 component.set('v.isOpen',false);
 },
})
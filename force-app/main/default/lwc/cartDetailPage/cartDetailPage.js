import { LightningElement,wire,track } from 'lwc';
import getCartitemswithDetails from "@salesforce/apex/getCartItems.getCartitemswithDetails";
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import DESCRIPTION_FIELD from '@salesforce/schema/Product2.Description';
import PRICE_FIELD from '@salesforce/schema/Product2.Price__c';


export default class CartDetailPage extends LightningElement {

    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Products in the cart', fieldName:'Product__c'},
        { label: 'Quantity', fieldName: 'Quantity__c'},
        
        //{ label: 'Product Name', fieldName:'Product__c.Name'},
        //{ label: 'Price', fieldName: 'Product__c.Price__c'},
        //{ label: 'Short Description', fieldName: 'Product__c.Description'},
        {
            label: 'Product Name',
            fieldName: NAME_FIELD.Name,
            type: 'text',
            editable: true
        },
        {
            label: 'Price',
            fieldName: PRICE_FIELD.Price__c,
            type: 'currency',
            editable: true
        },
        {
            label: 'Description',
            fieldName: DESCRIPTION_FIELD.Description,
            type: 'text',
            editable: true
        }
    ];
   @track cartList;

   @wire (getCartitemswithDetails) wiredAccounts({data,error}){
                if (data) {
                this.cartList = data;
                console.log(data); 
                } 
                    else if (error) {
                    console.log(error);
                    }
        }

}
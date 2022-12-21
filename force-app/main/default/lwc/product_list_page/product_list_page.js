import { LightningElement,api,wire,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import prdimgs from '@salesforce/apex/Product_list_page.getPrdimg';

export default class Product_list_page extends LightningElement {
@wire(prdimgs) prdimgs;

gid(){
    

    this[NavigationMixin.Navigate]({
        type: 'standard__component',
        attributes: {
            apiName: 'product_detail_page'
        }
    });
}
}
import { LightningElement , track} from 'lwc';

export default class Productsearch extends LightningElement {
    @track searchvalue;

    handleChange(event){
        const value = event.target.value;

        const searchEvent= new CustomEvent(
            'search',
            {
                detail : value
            }
        );
    
    this.dispatchEvent(searchEvent);
  }
}
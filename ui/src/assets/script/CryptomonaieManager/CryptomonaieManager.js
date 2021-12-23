
import Bitcoin from './Cryptomonaie/Bitcoin';

export default class CryptomonaieManager {

    constructor(){
        this.initCollection();
    }

    collection = {
    
    };

    initCollection(){
        this.addToColletion(Bitcoin);
    }

    addToColletion(instance){
        this.collection[instance.name] = new instance();
    }
    deleteFromCollection(){}
    updateFromCollection(){}
}
import Bitcoin from './Cryptomonaie/Bitcoin';

export default class CryptomonaieManager {

    constructor(){
        this._parent = null;
        this._router = null;
        this.initCollection();
    }

    collection = {};

    initCollection(){
        this.addToColletion(Bitcoin);
    }

    getParent(){
        return this.parent;
    }

    addToColletion(instance){
        var abstractElement = new instance(); 
        abstractElement.parent = this;
        this.collection[instance.name] = abstractElement;
    }

    deleteFromCollection(){}
    updateFromCollection(){}

    get parent(){
        return this._parent;
    }

    set parent(element){
        this._parent = element;
    }

    get router(){
        return this._router;
    }

    set router(element){
        this._router = element;
    }
}
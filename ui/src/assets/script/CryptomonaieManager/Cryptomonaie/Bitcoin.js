import AbstractCryptomonaie from './AbstractCryptomonaie';

export default class Bitcoin extends AbstractCryptomonaie {
    constructor(){
        super();
        this._parent = null;
        this.initCollection()
    }

    collection = {};

    checkRouter(){
        console.log(this.parent);
    }

    getParent(){
        return this.parent;
    }

    initCollection(){
        
    }

    initRouter(router){
        super.initRouter(router,"currency_bitcoin")
    }

    get parent(){
        return this._parent;
    }

    set parent(element){
        this._parent = element;
    }
}
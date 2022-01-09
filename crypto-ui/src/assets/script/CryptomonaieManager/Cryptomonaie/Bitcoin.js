import AbstractCryptomonaie from './AbstractCryptomonaie';
//import BitcoinComponent from '../../../../components/Crypto/Bitcoin.vue';

export default class Bitcoin extends AbstractCryptomonaie {
    constructor(){
        super();
        this._parent = null;
    }

    collection = {};

    getParent(){
        return this.parent;
    }

   /* initRouter(router){
        super.initRouter(router,"currency_bitcoin",BitcoinComponent);
    }*/

    get parent(){
        return this._parent;
    }

    set parent(element){
        this._parent = element;
    }
}
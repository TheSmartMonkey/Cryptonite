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

    get parent(){
        return this._parent;
    }

    set parent(element){
        this._parent = element;
    }
}
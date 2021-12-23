import AbstractCryptomonaie from './AbstractCryptomonaie';
import BitcoinComponent from '../../../../components/Crypto/Bitcoin.vue';

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
        router.addRoute({ name :"Bitcoin", path: '/bitcoin', component: BitcoinComponent })
    }

    get parent(){
        return this._parent;
    }

    set parent(element){
        this._parent = element;
    }
}
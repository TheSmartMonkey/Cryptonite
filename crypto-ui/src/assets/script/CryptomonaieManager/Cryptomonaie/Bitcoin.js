import AbstractCryptomonaie from './AbstractCryptomonaie';
//import BitcoinComponent from '../../../../components/Crypto/Bitcoin.vue';

export default class Bitcoin extends AbstractCryptomonaie {
    constructor(){
        super();
        this._parent = null;
        this._collection = {};
        this.defaultMonaie = 'btceur';
        this.defaultTime = 86400;
        super.getDataCryptoBitcoin('btceur');
        this.monaie = [
            {
              "name" : "EUR",
              "key" : "btceur"
            },
            {
              "name" : "USD",
              "key" : "btcusd"
            }
        ];
        this.time = [
            {
                "time" : "1 minute",
                "value" : 60
            },
            {
                "time" : "15 minutes",
                "value" : 900
            },
            {
                "time" : "1 heure",
                "value" : 3600
            },
            {
                "time" : "4 heures",
                "value" : 14400
            },
            {
                "time" : "1 jour",
                "value" : 86400
            },
            {
                "time" : "1 mois",
                "value" : 604800
            },
        ]
    }


    getParent(){
        return this.parent;
    }

    get collection(){
        return this._collection;
    }

    set collection(element){
        this._collection = element;
    }

    get parent(){
        return this._parent;
    }

    set parent(element){
        this._parent = element;
    }
}
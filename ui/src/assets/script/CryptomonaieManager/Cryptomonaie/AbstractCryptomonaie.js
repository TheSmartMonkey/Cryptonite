export default class AbstractCryptomonaie{
    constructor(){
    }

    initRouter(router){
        router.addRoute({ 
            name :this.constructor.name, 
            path: '/'+this.constructor.name, 
            component: import('../../../../components/Crypto/'+this.constructor.name+'.vue')
         });
    }
}
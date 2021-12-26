export default class AbstractCryptomonaie{
    constructor(){
    }

    initRouter(router,iconSideBar){
        router.addRoute({ 
            name :{
                full : this.constructor.name,
                icon : iconSideBar
            }, 
            path: '/'+this.constructor.name, 
            component: import('../../../../components/Crypto/'+this.constructor.name+'.vue'), 
         });
    }
}
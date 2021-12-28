//import Cryptomonaie from './Cryptomonaie/Cryptomonaie';
import router from '../../router/index';
import Home from '../../components/Home.vue';
import CryptomonaieManager from './CryptomonaieManager/CryptomonaieManager';
import Bitcoin from '../../components/Crypto/Bitcoin.vue';
import TradingVue from 'trading-vue-js';

export default class ProjectManager {

    constructor(){
        this.projectRouter = router;
        this.initCollection();
    }

    collection = {};

    initCollection(){
        this.addToColletion(CryptomonaieManager);
    }

    getRoutesCollectionToArray(routes){
        let allRoutes = []
        console.log(routes);
        for(let i in routes){
            allRoutes.push({
                name : routes[i].name,
                path : routes[i].path,
            })
        }
        console.log(allRoutes);
        return allRoutes;
    }

    addToColletion(instance){
        var abstractElement = new instance(); 
        abstractElement.parent = this;
        abstractElement.router = this.projectRouter;
        this.collection[instance.name] = abstractElement;

        console.log(this.collection);
    }

    deleteFromCollection(){}
    updateFromCollection(){}

    initRouter(){
        console.log("Init router");
        
        return new Promise(resolve => {
            this.projectRouter.addRoute({ 
                path: '/home', 
                name:{ full : "Home", icon : "home", show : false}, 
                component: Home, 
                children : [
                    {
                        path : '/Bitcoin',
                        component : {
                            Bitcoin,
                            "trading-vue" : TradingVue
                        },
                        name : {
                            full : "Bitcoin",
                            icon : 'currency_bitcoin',
                            show : true
                        },
                    }
                ]
            });
            resolve();
        })
        
    }
}
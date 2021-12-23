//import Cryptomonaie from './Cryptomonaie/Cryptomonaie';
import router from '../../router/index';
import Home from '../../components/Home.vue';
import CryptomonaieManager from './CryptomonaieManager/CryptomonaieManager';

export default class ProjectManager {

    constructor(){

    }

    collection = {
        cryptomonaie : new CryptomonaieManager()
    };

    addToColletion(){}
    deleteFromCollection(){}
    updateFromCollection(){}

    initRouter(){
        console.log("Init router");

        return new Promise(resolve => {
            router.addRoute({ path: '/home', component: Home });
            resolve();
        })
        
    }
    
    initialisationProject(){
        return new Promise(resolve => {
            resolve(router);
        })
    }
}
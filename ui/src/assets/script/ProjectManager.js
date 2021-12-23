//import Cryptomonaie from './Cryptomonaie/Cryptomonaie';
import router from '../../router/index';
import Home from '../../components/Home.vue';
import CryptomonaieManager from './CryptomonaieManager/CryptomonaieManager';

export default class ProjectManager {

    constructor(){
        this.projectRouter = router;
    }

    collection = {};

    initCollection(){
        this.addToColletion(CryptomonaieManager);
    }

    addToColletion(instance){
        var abstractElement = new instance(); 
        abstractElement.parent = this;
        abstractElement.router = this.projectRouter;
        this.collection[instance.name] = abstractElement;
    }

    deleteFromCollection(){}
    updateFromCollection(){}

    initRouter(){
        console.log("Init router");

        return new Promise(resolve => {
            this.projectRouter.addRoute({ path: '/home', component: Home });
            resolve();
        })
        
    }
    
    initialisationProject(){
        var self = this;
        return new Promise(resolve => {
            self.initCollection();
            resolve(router);
        })
    }
}
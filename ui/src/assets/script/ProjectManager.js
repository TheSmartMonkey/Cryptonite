//import Cryptomonaie from './Cryptomonaie/Cryptomonaie';
import router from '../../router/index';
import Home from '../../components/Home.vue';

export default class ProjectManager {

    constructor(){

    }

    collection = {
        //cryptomonaie : new Cryptomonaie()
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
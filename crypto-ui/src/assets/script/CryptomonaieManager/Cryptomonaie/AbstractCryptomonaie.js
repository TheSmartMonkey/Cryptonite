export default class AbstractCryptomonaie{
    constructor(){
    }
    
    initRouter(router,iconSideBar,componentElement){ 
        let parentRoutes = router.getRoutes()[0];
        console.log(parentRoutes,iconSideBar);
        parentRoutes.children.push({ 
            name :{
                full : this.constructor.name,
                icon : iconSideBar
            }, 
            path: '/'+this.constructor.name, 
            component: componentElement
         });
    }
}
import axios from 'axios'
export default class AbstractCryptomonaie{
    constructor(){
        this.instance = axios.create({
            baseURL : 'http://localhost:3001'
        })
    }

    addCollection(key,data){
        this.collection[key] = data
    }

    getDataCryptoBitcoin(monaie){
        let self = this;
        return new Promise(resolve => {
            this.instance.get("/crypto/ohlc/"+monaie).then(response => {
                var data = response.data;
                for(let i in data){
                    let element = data[i]      
                    /**
                     * @Remove
                    */         
                    if(element["simple"]){ self.addCollection(i,data[i]); continue;}
                    for (let j in element){
                        let data = element[j];
                        data = data.splice(5,1);
                    }
                    /* */
                    self.addCollection(i,data[i])
                }
                resolve();
            })
        })
    }
}
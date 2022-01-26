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
                    self.addCollection(i,data[i])
                }
                resolve();
            })
        })
    }
}
import axios from 'axios'
export default class AbstractCryptomonaie{
    constructor(){
        this.instance = axios.create({
            baseURL : 'http://localhost:3001'
        })
    }

    getData(){
        console.log(process.env);

        console.log("getData");
        this.instance.get("/crypto/trades/btceur").then(response => {
            console.log(response);
        })
    }
}
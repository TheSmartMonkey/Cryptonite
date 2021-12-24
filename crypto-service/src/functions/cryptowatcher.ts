import { ICWRequest } from './../models/api_model';
import { ICWParameters, ITrades } from '../models/api_model';
import axios from 'axios';

export class CryptoWatcher {
    market?: string;
    crypto: string;

    constructor(parameters: ICWParameters) {
        this.market = parameters.market || 'bitfinex';
        this.crypto = parameters.crypto;
    }

    async request(endpoint: string): Promise<ICWRequest> {
        const url = this.createUrl(endpoint);
        const response = await axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(`url : ${url}\n${error}\n`);
        });
        return response || {};
    }

    formatTrades(trades: number[][]): ITrades[] {
        const format = [] as ITrades[]; 
        trades.forEach(element => {
            format.push({
                timestamp: element[1],
                price: element[2],
                amount: element[3]
            });
        });
        return format;
    }

    private createUrl(endpoint: string): string {
        return `https://api.cryptowat.ch/markets/${this.market}/${this.crypto}/${endpoint}`;
    }
}

import { ICWRequest, ICWParameters, ISummary } from '../models/cryptowatcher_model';
import axios from 'axios';
import { ISummaryDTO, ITradesDTO } from '../models/api_model';

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

    formatTrades(trades: number[][]): ITradesDTO[] {
        const format = [] as ITradesDTO[]; 
        trades.forEach(trade => {
            format.push({
                timestamp: trade[1].toString(),
                price: trade[2].toString(),
                amount: trade[3].toString()
            });
        });
        return format;
    }

    formatSummary(summary: ISummary): ISummaryDTO {
        return {
            price: {
                last: summary.result.price.last.toString(),
                high: summary.result.price.high.toString(),
                low: summary.result.price.low.toString(),
                change: {
                    percentage: summary.result.price.change.percentage.toString(),
                    absolute: summary.result.price.change.absolute.toString(),
                }
            },
            volume: summary.result.volume.toString(),
            volumeQuote: summary.result.volumeQuote.toString(),
        };
    }

    private createUrl(endpoint: string): string {
        return `https://api.cryptowat.ch/markets/${this.market}/${this.crypto}/${endpoint}`;
    }

}

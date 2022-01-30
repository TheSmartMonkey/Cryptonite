import { ICWRequest, ICWParameters, ISummary, IOHLC } from '../models/cryptowatcher_model';
import axios from 'axios';
import { IOHLCDTO, ISummaryDTO, ITradesDTO } from '../models/api_model';
import { SimplePredict } from '../predictions/simple_predict';

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

    tradesToDTO(trades: number[][]): ITradesDTO[] {
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

    summaryToDTO(summary: ISummary): ISummaryDTO {
        const s = {...summary};
        return {
            price: {
                last: s.price.last.toString(),
                high: s.price.high.toString(),
                low: s.price.low.toString(),
                change: {
                    percentage: s.price.change.percentage.toString(),
                    absolute: s.price.change.absolute.toString(),
                }
            },
            volume: s.volume.toString(),
            volumeQuote: s.volumeQuote.toString(),
        };
    }

    ohlcToDTO(ohlc: IOHLC): IOHLCDTO {
        const data = {...ohlc};
        const sp = new SimplePredict(data);
        return {
            60: data[60],
            900: this.updateOHLC(data[60]),
            3600: data[3600],
            14400: data[14400],
            86400: data[86400],
            604800: data[604800],
            predictions: {
                simple: sp.getPerdiction()
            }
        };
    }

    /**
     * Update to the good timestamp
     * @param ohlcElement timestamp element of ohlc
     * @returns ohlcElement
     */
    private updateOHLC(ohlcElement: number[][]): number[][] {
        const data = [] as number[][];
        ohlcElement.forEach(element => {
            element[0] = element[0] * 1000;
            data.push(element);
        });
        return data;
    }

    private createUrl(endpoint: string): string {
        return `https://api.cryptowat.ch/markets/${this.market}/${this.crypto}/${endpoint}`;
    }

}

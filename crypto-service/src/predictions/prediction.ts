import { IOHLC } from '../models/cryptowatcher_model';

export interface IPrediction {
    60: number[][];
    900: number[][];
    3600: number[][];
    14400: number[][];
    86400: number[][];
    604800: number[][];
}

export class Prediction {
    ohlc: IOHLC;

    constructor(ohlc: IOHLC) {
        this.ohlc = ohlc;
    }

    protected parse(): IPrediction {
        const response = {} as IPrediction;
        for (const [key, value] of Object.entries(this.ohlc)) {
            response[key] = value;
        }
        return response;
    }

    protected getTimezone(timezone: string): number[][] {
        for (const [key, value] of Object.entries(this.ohlc)) {
            if (key ===  timezone) {
                return value;
            }
        }
        return [];
    }
}

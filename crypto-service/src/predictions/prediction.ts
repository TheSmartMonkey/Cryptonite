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
    private ohlc: IOHLC;
    protected prediction: IPrediction;

    constructor(ohlc: IOHLC) {
        this.ohlc = ohlc;
        this.prediction = this.ohlcToPrediction();
    }

    protected applyToAllTimezone(predictionCallback: CallableFunction): IPrediction {
        const response = {...this.prediction};
        for (const key of Object.keys(response)) {
            predictionCallback(key);
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

    private ohlcToPrediction(): IPrediction {
        const data = {...this.ohlc};
        return {
            60: data[60],
            900: data[900],
            3600: data[3600],
            14400: data[14400],
            86400: data[86400],
            604800: data[604800]
        };
    }
}

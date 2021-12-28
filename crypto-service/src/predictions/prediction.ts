import { IOHLC } from '../models/cryptowatcher_model';

export interface IPrediction {
    900: number[][];
    3600: number[][];
    14400: number[][];
    86400: number[][];
    604800: number[][];
}

export class Prediction {
    ohlc: IOHLC;
    prediction: IPrediction;

    constructor(ohlc: IOHLC) {
        this.ohlc = ohlc;
    }

    perdict(): IPrediction {
        return {
            900: this.ohlc[900],
            3600: this.ohlc[900],
            14400: this.ohlc[900],
            86400: this.ohlc[900],
            604800: this.ohlc[900]
        };
    }
}

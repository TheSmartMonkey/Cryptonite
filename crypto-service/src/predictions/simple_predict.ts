import { IPrediction, Prediction } from './prediction';

export class SimplePredict extends Prediction {
    perdict(): IPrediction {
        this.getTimezone('60');
        return {
            60: this.ohlc[60],
            900: this.ohlc[900],
            3600: this.ohlc[900],
            14400: this.ohlc[900],
            86400: this.ohlc[900],
            604800: this.ohlc[900]
        };
    }
}

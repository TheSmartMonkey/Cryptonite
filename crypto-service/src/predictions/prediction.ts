import { EOHLC } from './../models/prediction_model';
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
    protected currentPrice: number;

    constructor(ohlc: IOHLC) {
        this.ohlc = ohlc;
        this.prediction = this.ohlcToPrediction();
        this.currentPrice = this.prediction['60'].slice(-1)[0][EOHLC.ClosePrice];
    }

    /**
     * Get the data from a timezone
     * @param timezone IPrediction timezone
     * @returns Timezone data
     */
    protected getTimezoneData(timezone: string): number[][] {
        const data = {...this.ohlc};
        for (const [key, value] of Object.entries(data)) {
            if (key ===  timezone) {
                return value;
            }
        }
        return [];
    }

    /**
     * Price tendance in a timezone
     * @param openPrice OHLC model OpenPrice
     * @param closePrice OHLC model ClosePrice
     * @returns boolean
     */
    protected isPriceGoingUp(openPrice: number, closePrice: number): boolean {
        return openPrice < closePrice ? true : false;
    }

    /**
     * Get max value in a timezone
     * @param data Timezone data
     * @param elementId EOHLC timezone data id
     * @returns max number
     */
    protected getMax(data: number[][], elementId: number): number {
        let max = 0;
        data.forEach(element => {
            if (element[5] > max) max = element[elementId];
        });
        return max;
    }

    /**
     * Get min value in a timezone
     * @param data Timezone data
     * @param elementId EOHLC timezone data id
     * @returns min number
     */
    protected getMin(data: number[][], elementId: number): number {
        let min = 0;
        data.forEach(element => {
            if (element[5] < min) min = element[elementId];
        });
        return min;
    }

    /**
     * Get the average value in a timezone
     * @param data Timezone data
     * @param elementId EOHLC timezone data id
     * @returns average number
     */
    protected getAverage(data: number[][], elementId: number): number {
        let sum = 0;
        data.forEach(element => sum += element[elementId]);
        return sum / data.length;
    }

    /**
     * Create the prediction model
     * @returns IPrediction model
     */
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

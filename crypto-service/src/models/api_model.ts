import { IPrediction } from '../predictions/prediction';

export interface ITradesDTO {
    timestamp: string;
    price: string;
    amount: string;
}

export interface ISummaryDTO {
    price: {
        last: string;
        high: string;
        low: string;
        change: {
            percentage: string;
            absolute: string;
        };
    };
    volume: string;
    volumeQuote: string;
}

export interface IOHLCDTO {
    900: number[][];
    3600: number[][];
    14400: number[][];
    86400: number[][];
    604800: number[][];
    predictions: {
        simple: IPrediction
    }
}

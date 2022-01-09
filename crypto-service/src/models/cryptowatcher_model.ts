export interface ICWParameters {
    market?: string;
    crypto: string;
}

export interface ICWRequest {
    result: any;
    allowance: {
        cost: number;
        remaining: number;
        upgrade: string;
    };
}

export interface ITrades {
    timestamp: number;
    price: number;
    amount: number;
}

export interface ISummary {
    price: {
        last: number;
        high: number;
        low: number;
        change: {
            percentage: number;
            absolute: number;
        };
    };
    volume: number;
    volumeQuote: number;
}


/**
 * data element arguments:
 * 0: CloseTime
 * 1: OpenPrice
 * 2: HighPrice
 * 3: LowPrice
 * 4: ClosePrice
 * 5: Volume
 * 6: QuoteVolume
 */
export interface IOHLC {
    60: number[][];
    180: number[][];
    300: number[][];
    900: number[][];
    1800: number[][];
    3600: number[][];
    7200: number[][];
    14400: number[][];
    21600: number[][];
    43200: number[][];
    86400: number[][];
    259200: number[][];
    604800: number[][];
    '604800_Monday': number[][];
}

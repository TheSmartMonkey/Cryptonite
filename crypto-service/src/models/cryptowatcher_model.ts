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
    result: {
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
    };
}

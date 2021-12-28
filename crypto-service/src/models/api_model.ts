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

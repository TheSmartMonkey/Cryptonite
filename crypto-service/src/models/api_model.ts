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

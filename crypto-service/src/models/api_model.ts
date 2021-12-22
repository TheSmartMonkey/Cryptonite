export type ApiEndpoint = 'price' | 'summary';

interface IUrlParameters {
    market?: string;
    crypto: string;
    endpoint: ApiEndpoint;
}

export class CryptoWatcherUrl {
    market?: string;
    crypto: string;
    endpoint: ApiEndpoint;

    constructor(parameters: IUrlParameters) {
        this.market = parameters.market || 'kraken';
        this.crypto = parameters.crypto;
        this.endpoint = parameters.endpoint;
    }

    createUrl(): string {
        return `https://api.cryptowat.ch/markets/${this.market}/${this.crypto}/${this.endpoint}`;
    }
}

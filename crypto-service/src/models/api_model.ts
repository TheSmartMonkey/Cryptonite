export type ApiEndpoint = 'price';

export const cryptowatcherApi: { [endpoint in ApiEndpoint]: string } = {
    price: 'https://api.cryptowat.ch/markets/kraken/btceur/price'
};

import { ApiEndpoint, CryptoWatcherUrl } from '../models/api_model';
import axios from 'axios';

export async function getCryptoWatcherData(crypto: string, endpoint: ApiEndpoint, market = 'kraken'): Promise<any> {
    const url = new CryptoWatcherUrl({market, crypto, endpoint});
    const response = await axios.get(url.createUrl()).then(response => {
        return response.data;
    }).catch(error => {
        throw new Error(`ERROR getCryptoWatcherData: ${error}`);
    });
    return response || {};
}

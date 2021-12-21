import { cryptowatcherApi } from '../models/api_model'
import axios from 'axios'

export async function getCryptowatcherData(endpoint: string): Promise<void> {
    await axios.get(cryptowatcherApi[endpoint]).then((response) => {
        return response.data
    }).catch(() => {
        throw new Error('getCryptowatcherData request error')
    })
    // return {}
}

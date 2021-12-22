import { Express, Request } from 'express';
// import { getCryptoWatcherData } from './functions/cryptowatcher';

interface IControllersParameters {
  app: Express;
  port: string;
}

export class Controllers {
  app: Express;
  port: string;

  constructor(parameters: IControllersParameters) {
    this.app = parameters.app;
    this.port = parameters.port;
  }

  getEndpoints(): string[] {
    return this.app._router.stack
    .filter((r: any) => r.route)
    .map((r: any) => `http://localhost:${this.port}${r.route.path}`);
  }

  async getCryptoPrice(request: Request): Promise<string> {
    try {
      // const response = await getCryptoWatcherData('btcusd', 'price');
      // console.log('DEBUG: ', response);
      return `PARAMS: ${request.params.cryptoId}`;
    } catch (error) {
      throw new Error(`ERROR getCryptoPrice: ${error}`);
    }
  }
}

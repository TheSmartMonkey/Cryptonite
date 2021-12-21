import { Express, Request } from 'express';
// import { getCryptowatcherData } from './functions/cryptowatcher';

interface IHandelersParameters {
  app: Express;
  port: string;
}

export class Handlers {
  app: Express;
  port: string;

  constructor(parameters: IHandelersParameters) {
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
      // await getCryptowatcherData('price');
      return `PARAMS: ${request.params.cryptoId}`;
    } catch (error) {
      throw new Error(`ERROR getCryptoPrice: ${error}`);
    }
  }
}

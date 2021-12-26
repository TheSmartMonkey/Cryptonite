import { Express, Request } from 'express';
import { CryptoWatcher } from './functions/cryptowatcher';

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

  async getCryptoTrades(request: Request): Promise<any> {
    try {
      const crypto = request.params.cryptoId;
      const cw = new CryptoWatcher({crypto});
      const response = await cw.request('trades?limit=1000');
      return {
        data: cw.formatTrades(response.result)
      };
    } catch (error) {
      throw new Error(`${error}\n`);
    }
  }

  async getCryptoSummary(request: Request): Promise<any> {
    try {
      const crypto = request.params.cryptoId;
      const cw = new CryptoWatcher({crypto});
      const response = await cw.request('summary');
      return {
        data: response.result
      };
    } catch (error) {
      throw new Error(`${error}\n`);
    }
  }
}

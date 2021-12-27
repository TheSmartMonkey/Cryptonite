import { Express, Request, Response } from 'express';
import { CryptoWatcher } from './functions/cryptowatcher';
import { Database } from './functions/database';

interface IControllersParameters {
  app: Express;
  port: string;
}

export class Controllers {
  app: Express;
  port: string;
  db: Database;

  constructor(parameters: IControllersParameters) {
    this.app = parameters.app;
    this.port = parameters.port;
    this.db = new Database();
  }

  async request(response: Response, callback: () => any): Promise<void> {
    try {
      response.send(await callback());
    } catch (error) {
      throw new Error(`${error}\n`);
    }
  }

  getEndpoints(): string[] {
    // this.db.getAll();
    return this.app._router.stack
      .filter((r: any) => r.route)
      .map((r: any) => `http://localhost:${this.port}${r.route.path}`);
  }

  async getCryptoTrades(request: Request): Promise<any> {
    const crypto = request.params.cryptoId;
    const cw = new CryptoWatcher({ crypto });
    const response = await cw.request('trades?limit=1000');
    return {
      data: cw.formatTrades(response.result)
    };
  }

  async getCryptoSummary(request: Request): Promise<any> {
    const crypto = request.params.cryptoId;
    const cw = new CryptoWatcher({ crypto });
    const response = await cw.request('summary');
    return {
      data: response.result
    };
  }
}

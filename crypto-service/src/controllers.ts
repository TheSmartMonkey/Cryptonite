import { Express, Request, Response } from 'express';
import { CryptoWatcher } from './functions/cryptowatcher';
import { Database } from './functions/database';
import { ISummaryDTO, ITradesDTO } from './models/api_model';
import { IOHLC } from './models/cryptowatcher_model';

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
    return this.app._router.stack
      .filter((r: any) => r.route)
      .map((r: any) => `http://localhost:${this.port}${r.route.path}`);
  }

  async getCryptoTrades(request: Request): Promise<ITradesDTO[]> {
    const crypto = request.params.cryptoId;
    const cw = new CryptoWatcher({ crypto });
    const response = await cw.request('trades?limit=1000');
    return cw.tradesToDTO(response.result);
  }

  async getCryptoSummary(request: Request): Promise<ISummaryDTO> {
    const crypto = request.params.cryptoId;
    const cw = new CryptoWatcher({ crypto });
    const response = await cw.request('summary');
    return cw.summaryToDTO(response.result);
  }

  async getCryptoOHLC(request: Request): Promise<IOHLC> {
    const crypto = request.params.cryptoId;
    const cw = new CryptoWatcher({ crypto });
    const response = await cw.request('ohlc');
    return response.result;
  }
}

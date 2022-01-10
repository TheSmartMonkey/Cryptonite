import { Controllers } from './controllers';
import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { IOHLCDTO, ISummaryDTO } from './models/api_model';

// Initialize configuration
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;
const c = new Controllers({ app, port });

app.get('/', (_req: Request, res: Response) => c.request(res, (): string[] => c.getEndpoints()));
app.get('/crypto/summary/:cryptoId', async (req: Request, res: Response) => {
    c.request(res, async (): Promise<ISummaryDTO> => c.getCryptoSummary(req));
});
app.get('/crypto/ohlc/:cryptoId', async (req: Request, res: Response) => {
    c.request(res, async (): Promise<IOHLCDTO> => c.getCryptoOHLC(req));
});

app.listen(port, () => console.log(`Cryptonite app listening at http://localhost:${port}`));

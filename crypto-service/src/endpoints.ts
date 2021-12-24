import { Controllers } from './controllers';
import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Initialize configuration
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;
const c = new Controllers({app, port});

app.get('/', (_req: Request, res: Response) => res.send(c.getEndpoints()));
app.get('/crypto/trades/:cryptoId', async (req: Request, res: Response) => res.send(await c.getCryptoTrades(req)));
app.get('/crypto/summary/:cryptoId', async (req: Request, res: Response) => res.send(await c.getCryptoSummary(req)));

app.listen(port, () => console.log(`Cryptonite app listening at http://localhost:${port}`));
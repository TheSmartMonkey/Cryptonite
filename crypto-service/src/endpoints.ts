import { Handlers } from './controllers/handlers';
import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Initialize configuration
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;
const h = new Handlers({app, port});

app.get('/', (_req: Request, res: Response) => res.send(h.getEndpoints()));
app.get('/crypto/:cryptoId', async (req: Request, res: Response) => res.send(await h.getCryptoPrice(req)));

app.listen(port, () => console.log(`Cryptonite app listening at http://localhost:${port}`));

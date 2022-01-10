import mysql from 'mysql';
import { ITradesDTO } from '../models/api_model';

export class Database {
    db: mysql.Connection;

    constructor() {
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database : 'cryptonite'
        });
    }

    async list(cryptoId: string): Promise<ITradesDTO[]> {
        const response = await this.query(`SELECT * FROM ${cryptoId}`);
        return response;
    }

    async create(timestamp: number, price: number, amount: number): Promise<void> {
        await this.query(`INSERT INTO btcusd (timestamp, price, amount) VALUE ("${timestamp}", "${price}", "${amount}")`);
    }

    private async query(request: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.query(request, (error, args) => error ? reject(`${error}\n`): resolve(args));
        });
    }
}

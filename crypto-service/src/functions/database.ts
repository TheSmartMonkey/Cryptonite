import mysql from 'mysql';

export class Database {
    db: mysql.Connection;

    constructor() {
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database : 'cryptonite'
        });
    
        this.db.connect(error => {
            if (error) throw new Error(`${error}\n`);
            console.log('Connecté à la base de données MySQL!');
        });
    }

    getAll(): any {
        return this.query('SELECT * FROM btcusd');
    }

    create(timestamp: number, price: number, amount: number): void {
        this.query('INSERT INTO btcusd (timestamp, price, amount) VALUE ("35214654", "32000", "0.2")');
    }

    private query(request: string): void {
        this.db.query(request, error => {
            if (error) throw new Error(`${error}\n`);
        });
    }
}

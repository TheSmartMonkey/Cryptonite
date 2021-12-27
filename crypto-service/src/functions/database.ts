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

    getAll(): void {
        this.db.query('SELECT * FROM cryptonite', (error, result) => {
            if (error) throw new Error(`${error}\n`);
            console.log(result);
        });
    }
}

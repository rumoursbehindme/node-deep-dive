import pg from 'pg';
import fp from 'fastify-plugin';

export const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'pass@word2',
    database: 'MYPOSTGRES'
})
const clientPlugin = async (instance) => {

    client.connect()
        .then(() => {
            console.log('Connected to Postgres')
        })
        .then(() => {
            const createTableQuery = `
        CREATE TABLE IF NOT EXISTS products(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        quantity INT,
        description TEXT
        );
        `;
            return client.query(createTableQuery);
        })
        .then(() => console.log('Table created'))
        .catch(err => console.error('Error creating table', err.stack))
}

export default fp(clientPlugin);


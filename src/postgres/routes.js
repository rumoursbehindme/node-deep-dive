import clientPlugin, { client } from './postgres.js';
import pf from 'fastify-plugin';

const crudRoutes = async (instance) => {
    await instance.register(clientPlugin);
    instance.get('/', (req, reply) => {
        reply.redirect('/menu');
    })
    instance.get('/database', async (req, reply) => {
        const result = await client.query('select * from products');
        reply.send(result.rows);
    });

    instance.post('/updateDatabase', async (req, reply) => {
        const { name, quantity, description } = req.body;

        // Check if the product already exists
        const checkQuery = 'SELECT * FROM products WHERE name = $1';
        const checkResult = await client.query(checkQuery, [name]);

        if (checkResult.rows.length > 0) {
            // Product exists, update quantity and description
            const updateQuery = 'UPDATE products SET quantity = quantity + $1, description = $2 WHERE name = $3 RETURNING *';
            const updateValues = [quantity, description, name];
            const updateResult = await client.query(updateQuery, updateValues);
            reply.send(updateResult.rows[0]);
        } else {
            // Product does not exist, insert new record
            const insertQuery = 'INSERT INTO products(name, quantity, description) VALUES($1, $2, $3) RETURNING *';
            const insertValues = [name, quantity, description];
            const insertResult = await client.query(insertQuery, insertValues);
            reply.send(insertResult.rows[0]);
        }
    });

    instance.post('/deleteRecentlyAddedRow', async (req, reply) => {
        try {

            const selectQuery = `SELECT * FROM products ORDER BY id DESC LIMIT 1;`;
            const selectResult = await client.query(selectQuery);

            if (selectResult.rowCount === 0) {
                reply.status(404).send({ error: 'No product found to delete' });
                return;
            }

            const lastProductId = selectResult.rows[0].id;

            // Delete the product with the last ID
            const deleteQuery = `DELETE FROM products WHERE id = $1`;
            await client.query(deleteQuery, [lastProductId]);

            // Send the deleted row's data in the response
            reply.send(selectResult.rows[0]);
        } catch (error) {
            console.error('Error deleting product:', error);
            reply.status(500).send({ error: 'Failed to delete product' });
        }
    });
}

export default pf(crudRoutes);
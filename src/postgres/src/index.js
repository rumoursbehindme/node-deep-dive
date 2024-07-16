import Fastify from "fastify";
import uiPlugin from './ui.js';
import crudRoutes from './routes.js';

const instance = Fastify();

instance.register(uiPlugin);
instance.register(crudRoutes);
instance.listen({ port: 9000 })
    .then((port) => {
        console.log('Fastify Instance: Running on localhost: ' + port)
    })
    .catch((err) => {
        console.log('Connection failed: ' + err);
    })
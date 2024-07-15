import staticPlugin from '@fastify/static';
import { readFile } from 'fs'
import { join } from 'path';
import pf from 'fastify-plugin';

const uiPlugin = async (instance) => {
    instance.register(staticPlugin, {
        root: join(process.cwd(), 'public'),
        prefix: '/'
    });
    try {
        instance.get('/ui', (req, reply) => {
            reply.sendFile('ui.html');
        })

        instance.get('/menu', (req, reply) => {
            reply.sendFile('menu.html');
        })
    }
    catch (e) {
        console.log(e)
    }

}
export default pf(uiPlugin);
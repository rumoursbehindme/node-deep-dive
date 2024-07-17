import { Service } from 'node-windows';
// TODO Run ```npm install node-windows```
// Open cmd in administrator mode change directory to current working directory(postgres).
//Run command ```node src/service/service.js```
//This will create widows service for postgres project

import { join } from 'path';

const svc = new Service({
    name: 'RBM Postgres',
    description: 'This is sub application of node-deep-dive',
    script: join(process.cwd(), 'src/index.js')
});

svc.on('install', function () {
    svc.start();
});

svc.install();
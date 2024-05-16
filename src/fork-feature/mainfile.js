import { fork } from 'child_process';
import { join } from 'path';

//fork a new work
const forkedWorker = fork(join(process.cwd(), 'src/fork-feature', 'workerfile.js'));

forkedWorker.send('Testing message.');

forkedWorker.on('message', (message) => {
    console.log('Recieved from worker: ', message);
})
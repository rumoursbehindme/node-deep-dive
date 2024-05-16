// main.js

import { spawn } from 'child_process';
import { join } from 'path';

// Spawn a new process for the Python script
const pythonProcess = spawn('python', [join(process.cwd(),'src/spawn-feature/script.py')]);

// Listen for data from the Python script's stdout
pythonProcess.stdout.on('data', (data) => {
    console.log(`Data from Python script: ${data}`);
});

// Listen for errors from the Python script's stderr
pythonProcess.stderr.on('data', (data) => {
    console.error(`Error from Python script: ${data}`);
});

// Listen for the Python script's exit event
pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
});

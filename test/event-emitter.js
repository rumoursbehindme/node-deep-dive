import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

// Define a listener
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit an event
eventEmitter.emit('greet', 'Rajeev');

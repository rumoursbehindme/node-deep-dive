process.on('message', (message) => {
    console.log('Note: ', message);
})

process.send('Testing message.');
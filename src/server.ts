import express from 'express';
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
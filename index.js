const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1>HOLA MUNDO FROM AWS</h1>
    `)
});

app.get('/test', (req, res) => {
    res.send(`
    <h1>ES UN NUEVO DIA TEST</h1>
    `)
});

app.listen(8080, () => {
    console.log('Running on port 8080');
});

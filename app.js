const express = require('express');
const app = express();

app.get('/hello-world', (req, res) => {
    return res.send('Hello World');
})
module.exports = app;
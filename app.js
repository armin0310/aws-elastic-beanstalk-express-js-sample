const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Gonna be a DevOps engineer lmao'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

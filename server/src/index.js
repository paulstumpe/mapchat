const express = require('express');
const db = require('./database/Controllers');
const connection = require('./database/Controllers');
const controllers = require('./database/Controllers')
const app = express();
const port = 8080;
const { apiRouter } = require('./routes');


app.use('/', apiRouter);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require('express');
const db = require('./database/index');
const connection = require('./database/Connection');
const controllers = require('./database/Controllers')
const app = express();
const port = 8080;
const { apiRouter } = require('./routes');
const lala = require('./test');


app.use('/', apiRouter);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

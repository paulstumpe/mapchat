const express = require('express');
const db = require('./database/index');
const app = express();
const port = 8080;
const { apiRouter } = require('./api/routes');
require('./services/googlePlaces');

app.use('/', apiRouter);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

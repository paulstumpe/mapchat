const express = require('express');
const connection = require('./database/Connection');
const controllers = require('./database/Controllers')
const app = express();
const port = 8080;
// require('../services/googlePlaces');
const { apiRouter } = require('./routes');

app.use(express.json()); //Used to parse JSON bodies

app.use('/', apiRouter);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

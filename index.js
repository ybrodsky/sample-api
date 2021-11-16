const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/catalogo', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

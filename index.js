const express = require('express');
const { faker } = require('@faker-js/faker');
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.use(express.json())


app.listen(port, () => {
  console.log('my port ' + port);
});

routerApi(app)

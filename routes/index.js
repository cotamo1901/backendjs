const producsRoter = require('./products.router');
function routerApi(app) {
  app.use('/products', producsRoter);
}

module.exports = routerApi;

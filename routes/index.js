const producsRouter = require('./products.router');
const userRouter = require('./user.router')
const categorieRouter = require('./categories.router')

function routerApi(app) {
  app.use('/products', producsRouter);
  app.use('/user', userRouter)
  app.use('/categories', categorieRouter)
}

module.exports = routerApi;

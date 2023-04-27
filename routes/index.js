const express = require('express')

const producsRouter = require('./products.router');
const userRouter = require('./user.router')
const categorieRouter = require('./categories.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', producsRouter);
  router.use('/user', userRouter)
  router.use('/categories', categorieRouter)
}

module.exports = routerApi;

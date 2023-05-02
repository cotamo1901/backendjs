const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
});

router.post('/', (res, req) => {
  const body = require.body;
  res.status(201).json({
    message: 'create',
    data: body,
  });
});

router.patch('/:id', (res, req) => {
  const body = require.body;
  const { id } = require.params;

  if (id === 999) {
    res.status(404).json({
      message: 'dont found',
    });
  } else {
    res.json({
      message: 'update',
      data: body,
    });
  }
});

router.delete('/:id', (res, req) => {
  const { id } = require.params;
  const body = require.body;

  res.json({
    message: 'deleted',
    data: body,
  });
});
module.exports = router;

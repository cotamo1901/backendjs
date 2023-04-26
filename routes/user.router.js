
const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router()
router.get('/', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('dont have parameter');
  }
});


module.exports = router

const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
router.get('/', (req, res) => {
  const users = service.find();
  res.json([users])
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'create',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = require.params;
  const body = require.body;
  res.json({
    message: 'delete',
    id,
  });
});

module.exports = router;

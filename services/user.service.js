const { faker } = require('@faker-js/faker');
class Userservice {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    const { limit, offset } = req.query;

    if (limit && offset) {
      res.json({
        limit,
        offset,
      });
    } else {
      res.send('dont have parameter');
    }
  }
}

module.exports = users;

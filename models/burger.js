const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll(res => {
      cb(res);
    });
  },
  insertOne: function(burgerName, isDevoured, cb) {
    orm.insertOne(burgerName, isDevoured, res => {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne(id, res => {
      cb(res);
    });
  }
};

module.exports = burger;

// this is likely where an error would occur. Not 100% sure i am getting burger specific input
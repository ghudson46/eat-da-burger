const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  insertOne: function(values, cb) {
    orm.insertOne("burgers", values, res => {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
   orm.updateOne("burgers", objColVals, condition, res => {
     cb(res);
   })
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, res => {
      cb(res);
    });
  },
};

module.exports = burger;


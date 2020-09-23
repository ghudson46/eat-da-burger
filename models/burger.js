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
  updateOne: function() {
   
  },
  deleteOne: function () {
    
  },
};

module.exports = burger;

// this is likely where an error would occur. Not 100% sure i am getting burger specific input
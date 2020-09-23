const connection = require('./connection');

const orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??;";
    var query = connection.query(queryString, [tableName], (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableName, values, cb) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?);";
    var query = connection.query(queryString, [tableName, values[0], values[1]], (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
      cb(result);
    });
  },
  updateOne: function() {
    
  },
  deleteOne: function() {
   
  },

};

module.exports = orm;
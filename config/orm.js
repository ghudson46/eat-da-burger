const connection = require('./connection');

const orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM burgers;";
    var query = connection.query(queryString, [table, cb], (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
    });
  },
  insertOne: function(table, burgerName, isDevoured, cb) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ??);";
    var query = connection.query(queryString, [table, burgerName, isDevoured, cb], (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
    });
  },
  updateOne: function(table, id, cb) {
    var queryString = "UPDATE burgers SET devoured = NOT devoured WHERE id = ??;";
    var query = connection.query(queryString, [table, id, cb], (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
    });
  }
};

module.exports = orm;
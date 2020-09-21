const connection = require('./connection');

const orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    var query = connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
    });
  },
  insertOne: function(burgerName, isDevoured, cb) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ??);";
    var query = connection.query(queryString, [table, burgerName, isDevoured], (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
    });
  },
  updateOne: function(id, cb) {
    var queryString = "UPDATE burgers SET devoured = NOT devoured WHERE id = ??;";
    var query = connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      console.log(query.sql);
      console.log(result);
    });
  }
};

module.exports = orm;
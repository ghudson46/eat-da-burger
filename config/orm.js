const { query } = require('express');
const connection = require('./connection');

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
  updateOne: function(tableName, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableName;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteOne: function(tableName, condition, cb) {
   var queryString = "DELETE FROM " + tableName;
   queryString += " WHERE ";
   queryString += condition;

   var query = connection.query(queryString, (err, result) => {
     if (err) {
       throw err;
     }
     console.log(query.sql);
     console.log(result);
     cb(result);
   })
  },

};

module.exports = orm;
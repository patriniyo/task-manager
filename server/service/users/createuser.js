const mysql = require('mysql2');
const connection = require('../../config/dbconnection');

const createUsers = (username, password, firstname, lastname) => {
    // define the query
    const sql = `
        INSERT INTO users (username, password, firstname, lastname)
        VALUES (?, ?, ?, ?);
      `;
      const values = [username, password, firstname, lastname];
  
    return new Promise((resolve, reject) => {
      // execute the query
      connection.query(sql, values, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          //console.log(results); // an array of rows returned by the query
          resolve(results);
        }
        // close the connection
        //connection.end();
      });
    });
  };
  
  module.exports = createUsers;
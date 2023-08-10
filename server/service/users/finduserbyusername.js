const mysql = require('mysql2');
const connection = require('../../config/dbconnection');

const findUserByUsername = (username) => {
  // Define the query
  const sql = `
    SELECT username FROM users
    WHERE username = ?;
  `;

  const values = [username];

  return new Promise((resolve, reject) => {
    // Execute the query with parameterized values
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = findUserByUsername;

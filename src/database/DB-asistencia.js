const mysql = require("mysql");
require('dotenv').config()

const connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DB
  });
  
connection.connect(err => {
err ?console.error('error connecting: ' + err.stack)
:console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
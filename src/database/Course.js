const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'asistencia'
  });
  
connection.connect(err => {
err ?console.error('error connecting: ' + err.stack)
:console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
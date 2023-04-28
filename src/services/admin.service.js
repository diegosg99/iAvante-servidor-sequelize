const connection = require('../database/DB-asistencia')

const registerAdmin = (data,encodedPassword) => {

    let sql = `INSERT INTO admins VALUES 
    ('${data.id}','${data.name}','${data.dni}','${data.username}',
    '${data.email}','${data.phone}','${encodedPassword}','${data.photo}')`;
   
        return new Promise((resolve, reject) => {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const loginAdmin = (data) => {

    let sql = `SELECT username,password FROM admins WHERE username = '${data.username}'`;

        return new Promise((resolve, reject) => {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const getAdmin = (data) => {

    let sql = `SELECT * FROM admins WHERE username = '${data}'`;

        return new Promise((resolve, reject) => {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const checkToken = (data,encodedPassword) => {

    let sql = `SELECT username,password FROM admins WHERE username = '${data.username}'`;

        return new Promise((resolve, reject) => {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

module.exports = {
    registerAdmin,
    loginAdmin,
    getAdmin,
    checkToken
}
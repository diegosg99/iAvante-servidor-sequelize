const connection = require('../database/DB-asistencia')

const registerAdmin = (data,encodedPassword) => {

    let sql = `USE iavante;
    INSERT INTO admins VALUES 
    ('${data.id}','${data.name}','${data.dni}','${data.username}',
    '${data.email}','${data.phone}','${encodedPassword}','${data.photo}');`;
   
    console.log(sql);

        return new Promise((resolve, reject) => {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:'Registrado'});
                reject({status:400, data:err});            
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

    console.log("adminGET: "+data);

    let sql = `SELECT * FROM admins WHERE username = '${data}'`;

        return new Promise((resolve, reject) => {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const checkToken = (data,encodedPassword) => {

    console.log("token: "+data);

    let sql = `SELECT username,password FROM admins WHERE username = '${data.username}'`;

        return new Promise((resolve, reject) => {

            connection.query(sql, function(err, rows, fields) {   
                console.log(rows); 
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
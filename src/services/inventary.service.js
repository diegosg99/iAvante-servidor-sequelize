const connection = require('../database/DB-asistencia')

const getAllItems = () => {
        let sql = `SELECT * FROM inventario ORDER BY name ASC;`;
        
        return new Promise(function(resolve, reject) {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const getAllSellers = () => {
    let sql = `SELECT * FROM vendedores ORDER BY name ASC;`;
    
    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}

module.exports = {
    getAllItems,
    getAllSellers
}
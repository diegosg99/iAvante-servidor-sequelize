const connection = require('../database/DB-asistencia')

const updateStudent = (data,timestamp) => {
    
    let sql = `UPDATE alumnos 
                SET dni='${data.dni}',
                name='${data.name}',
                surname='${data.surname}',
                email='${data.email}',
                phone='${data.phone}',
                details='${data.details}',
                rights='${data.rights}',
                entry='${moment.unix(timestamp).format("YYYY-MM-DD HH:mm:ss")}'
                WHERE dni = '${data.dni}';`;
        
        return new Promise(function(resolve, reject) {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const getAllStudents = () => {

    let sql = `SELECT * FROM alumnos;`;
    console.log(sql);
    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) { 
            console.log({status:200, data:rows})   
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}

const getCourseStudents = (data) => {
    let sql = `SELECT dni,name,surname FROM alumnos WHERE course = '`+data+`';`;
    
    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}

const getStudent = (dni) => {

    let sql = `SELECT * FROM alumnos WHERE dni = '`+dni+`';`;
    
    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}
//-------------PROBABLEMENTE FUERA------------------
const postExcelData = (reqData) => {
    reqData.forEach(item =>{
        let sql = `INSERT IGNORE INTO alumnos VALUES ('${item.dni}','${item.name}','${item.surname}','${item.email}',${item.phone},'${item.details}','${item.course}','${item.rights}','${item.entry}','${item.exit}')`;
    
        connection.query(sql, function(err, rows, fields) {    
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });          
      })
}

module.exports = {
    updateStudent,
    getAllStudents,
    getCourseStudents,
    getStudent,
    postExcelData
}

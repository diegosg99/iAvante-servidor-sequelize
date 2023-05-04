const connection = require('../database/DB-asistencia')

const getAllCourses = () => {
        let sql = `SELECT * FROM cursos ORDER BY name ASC;`;
        

        return new Promise(function(resolve, reject) {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const getMonthCourses = (month) => {
    let sql = `SELECT * FROM cursos WHERE start_date WHERE start_date LIKE %/${month}/% ORDER BY name ASC;`;
    

    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}

const getCourseName = () => {
        let sql = `SELECT code,name FROM cursos;`;

        return new Promise(function(resolve, reject) {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const getDocumentation = (courseCode) => {
        let sql = `SELECT documentationUrl FROM cursos WHERE code = '${courseCode}';`;
        return new Promise(function(resolve, reject) {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const getCourseRoom = (courseCode) => {
        let sql = `SELECT room FROM cursos WHERE code = '${courseCode}';`;
        return new Promise(function(resolve, reject) {

            connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
        });            
    })
}

const getCourseData = (courseCode) => {

    let sql = `SELECT * FROM cursos WHERE code = '${courseCode}';`;

    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
                resolve({status:200, data:rows});
                reject({status:400, data:'Error'});            
            });            
        })
}

const postExcelData = (reqData) => {

    return new Promise(function(resolve, reject) {

        let inserted_rows = 0;

    reqData.forEach(item =>{
        console.log(item);
        let sql = `INSERT IGNORE
                    INTO cursos 
                    VALUES ('${item.id}','${item.code}','${item.name}','${item.tutor}','${item.room}',
                    '${item.pres_days}','${item.documentation}','${item.state}',
                    '${item.location}','${item.province}','${item.platform}',
                    '${item.date_start}','${item.date_end}');`;
        
        console.log("SQL: "+sql);
        connection.query(sql);

        inserted_rows++;
    });            

    console.log("INSERTED ROWS: "+inserted_rows);
    resolve({status:200, data:'Subida realizada con éxito, se han subido '+inserted_rows+' filas.'});
    reject({status:400, data:'Error'}); 
    })
}

module.exports = {
    getAllCourses,
    getMonthCourses,
    getCourseName,
    getDocumentation,
    getCourseRoom,
    getCourseData,
    postExcelData
}
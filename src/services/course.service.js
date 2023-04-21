const connection = require('../database/Course')

const getAllCourses = () => {
        let sql = `SELECT * FROM cursos;`;
        

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
    try{
        let sql = `SELECT documentationUrl FROM cursos WHERE code = '${courseCode}';`;
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            return {status:200,data:rows}
            });
    }catch(error){
        return {status:200,data:'Error'}
    }
    return
}
const getCourseRoom = (courseCode) => {
    try{
        let sql = `SELECT room FROM cursos WHERE code = '${courseCode}';`;
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            return {status:200,data:rows}
            });
    }catch(error){
        return {status:400,data:'Error'}
    }}
const getCourseData = (courseCode) => {
    try{
        let sql = `SELECT * FROM cursos WHERE code = '${courseCode}';`;
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            return {status:200,data:rows[0]}
            });
    }catch(error){
        return {status:400,data:'Error'}
    }}
const postExcelData = (reqData) => {
    try{
      
        data.forEach(item =>{
          let sql = `INSERT IGNORE INTO cursos VALUES ('${item.id}','${item.code}','${item.name}','${item.tutor}','${item.room}','${item.day}','${item.documentation}')`;
      
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            return {status:200,data:'Exito'}
            });
        })
      }catch(error) {
        return {status:400,data:'Error subiendo datos'}
    }}

module.exports = {
    getAllCourses,
    getCourseName,
    getDocumentation,
    getCourseRoom,
    getCourseData,
    postExcelData
}
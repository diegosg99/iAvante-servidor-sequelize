const moment = require('moment/moment');
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
    let realMonths = {
        '0':'01',
        '1':'02',
        '2':'03',
        '3':'04',
        '4':'05',
        '5':'06',
        '6':'07',
        '7':'08',
        '8':'09',
        '9':'10',
        '10':'11',
        '11':'12'
    };
    //month = oneNumberMonths.find(months => months===month)? '0'+parseInt(month)+1:parseInt(month)+1;

    let sql = `SELECT * FROM cursos WHERE start_date LIKE '%/${realMonths[month]}/${moment().year()}%' ORDER BY name ASC;`;
    console.log(sql);

    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
            console.log(rows);
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}

const getEvent = (province,month,day) => {
    let realMonths = {
        '0':'01',
        '1':'02',
        '2':'03',
        '3':'04',
        '4':'05',
        '5':'06',
        '6':'07',
        '7':'08',
        '8':'09',
        '9':'10',
        '10':'11',
        '11':'12'
    };

    let sql = `SELECT * 
    FROM cursos 
    WHERE start_date 
    LIKE '%${day}/${realMonths[month]}/${moment().year()}%' 
    AND 
    province LIKE '%${province}%' 
    ORDER BY name ASC;`;
    console.log(sql);

    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
            console.log(rows);
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}

const getEventByCode = (code) => {

    let sql = `SELECT * 
    FROM cursos 
    WHERE code LIKE '%${code}%'
    ORDER BY name ASC;`;
    console.log(sql);

    return new Promise(function(resolve, reject) {

        connection.query(sql, function(err, rows, fields) {    
            console.log(rows);
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
                    '${item.date_start}','${item.date_end}',${null},${null},${null},${null});`;
        
        console.log("SQL: "+sql);
        connection.query(sql);

        inserted_rows++;
    });            

    console.log("INSERTED ROWS: "+inserted_rows);
    resolve({status:200, data:'Subida realizada con éxito, se han subido '+inserted_rows+' filas.'});
    reject({status:400, data:'Error'}); 
    })
}

const updateCourse = (course) => {
    return new Promise(function(resolve, reject) {
        console.log('---------------------------------------------CURSO-----------------------------------')
        console.log(course);

        //Añadir tutor al sql
    let sql =   `UPDATE cursos SET name = '${course.name}', room = '${course.rooms}',
                    workshops = '${course.workshops}',location = '${course.location}', schedule = '${course.hours}',
                    breakfast = '${course.breakfast}',snack = '${course.snack}', lunch = '${course.lunch}',
                    details= '${course.details}',color= '${course.color}'
                    WHERE code LIKE '%${course.code}%';`;
    console.log(sql);
    connection.query(sql);

    resolve({status:200, data:'Actualización realizada con éxito.'});
    reject({status:400, data:'Error'}); 
    })
}

const createCourse = (course) => {
    console.log(course);
    return new Promise(function(resolve, reject) {

    let sql =   `INSERT INTO cursos (code,name,room,workshops,location,schedule,breakfast,snack,lunch,province,start_date,end_date,details,color) 
                VALUES ('${course.code}','${course.name}',
                    '${course.rooms}','${course.workshops}','${course.location}',
                    '${course.hours}','${course.breakfast}','${course.snack}',
                    '${course.lunch}','${course.province}','${course.date_start}',
                    '${course.date_end}','${course.details}','${course.color}');`;
    console.log(sql);
    connection.query(sql);

    resolve({status:200, data:'Subida realizada con éxito.'});
    reject({status:400, data:'Error'}); 
    })
}

const deleteCourse = (data) => {
    console.log(data);
    return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM cursos WHERE code LIKE '%${data.code}%';`;
        console.log(sql);
    connection.query(sql);

    resolve({status:200, data:'Curso eliminado con éxito.'});
    reject({status:400, data:'Error'}); 
    })
}


module.exports = {
    getAllCourses,
    getMonthCourses,
    getEvent,
    getEventByCode,
    getCourseName,
    getDocumentation,
    getCourseRoom,
    getCourseData,
    postExcelData,
    updateCourse,
    createCourse,
    deleteCourse
}
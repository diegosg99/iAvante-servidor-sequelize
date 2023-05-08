const connection = require('../database/DB-asistencia');

uploadSurvey = (item) => {
    console.log(item);

    let sumglobal = (item.question1 + item.question2 + item.question3);
    let global = (sumglobal/3).toFixed(2);
  
    let sql = `INSERT INTO valoracion VALUES ('${item.id}','${item.course}','${item.student}',${item.question1},${item.question2},${item.question3},'${item.question4}', ${global})`;
  
    return new Promise((resolve, reject) => {

        connection.query(sql, function(err, rows, fields) {    
            resolve({status:200, data:rows});
            reject({status:400, data:'Error'});            
        });            
    })
}

module.exports = {
    uploadSurvey
};
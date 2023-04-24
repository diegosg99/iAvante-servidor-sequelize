const studentsService = require("../services/student.service");

const updateStudent = (req, res) => {

    let data = req.body;
    let timestamp = moment().unix();

    studentsService.updateStudent(data,timestamp)
        .then(({status,data}) => {
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const getCourseStudents = (req,res) => {
    let data = req.params.id;
    
    studentsService.getCourseStudents(data)
        .then(({status,data}) => {
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });

}

const getAllStudents = (req,res) => {

    studentsService.getAllStudents()
        .then(({status,data}) => {
            res.status(status).send(data)
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });
}

const getStudent = (req,res) => {
    let dni = req.params.id;

    studentsService.getStudent(dni)
        .then(({status,data}) => {
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        })
}

const postExcelData = (req,res) => {
    let reqData = req.body;
    
      let {status,data} = studentsService.postExcelData(reqData);
      res.status(status).send(data);
}

module.exports = {
    getAllStudents,
    getCourseStudents,
    updateStudent,
    getStudent,
    postExcelData
}
const courseService = require("../services/course.service");

const getAllCourses = (req, res) => {

    courseService.getAllCourses()
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const getCourseName = (req,res) => {
    
    courseService.getCourseName()
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });

}

const getDocumentation = (req,res) => {
    let courseCode = req.params.courseCode;

    courseService.getDocumentation(courseCode)
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });
}

const getCourseRoom = (req,res) => {
    let courseCode = req.params.courseCode;

    courseService.getCourseRoom(courseCode)
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });
}

const getCourseData = (req,res) => {
    let courseCode = req.params.courseCode;
    
    courseService.getCourseData(courseCode)
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });
}

const postExcelData = (req,res) => {
    let reqData = req.body;
    
      courseService.postExcelData(reqData)
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });
}

module.exports = {
    getAllCourses,
    getCourseName,
    getDocumentation,
    getCourseRoom,
    getCourseData,
    postExcelData
}
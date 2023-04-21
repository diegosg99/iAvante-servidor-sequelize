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

    let {status,data} = courseService.getDocumentation(courseCode);
    res.status(status).send(data);
}

const getCourseRoom = (req,res) => {
    let courseCode = req.params.courseCode;

    let {status,data} = courseService.getCourseRoom(courseCode);
    res.status(status).send(data);
}

const getCourseData = (req,res) => {
    let courseCode = req.params.courseCode;
    
    let {status,data} = courseService.getCourseData();
    res.status(status).send(data);
}

const postExcelData = (req,res) => {
    let reqData = req.body;
    
      let {status,data} = courseService.postExcelData(reqData);
      res.status(status).send(data);
}

module.exports = {
    getAllCourses,
    getCourseName,
    getDocumentation,
    getCourseRoom,
    getCourseData,
    postExcelData
}
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

const getMonthCourses = (req, res) => {
    let month = req.params.month;

    courseService.getMonthCourses(month)
        .then(({status,data}) => {
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const getEvent = (req,res) => {
    let province = req.params.province;
    let month = req.params.month;
    let day = req.params.day;

    courseService.getEvent(province,month,day)
        .then(({status,data}) => {
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const getEventByCode = (req,res) => {
    let code = req.params.code;

    courseService.getEventByCode(code)
        .then(({status,data}) => {
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

const updateCourse = (req,res) => {
    let reqData = req.body;
    
      courseService.updateCourse(reqData)
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });
}

const createCourse = (req,res) => {
    let reqData = req.body;
    
      courseService.createCourse(reqData)
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });
}

const deleteCourse = (req,res) => {
    let reqData = req.body;

    console.log(reqData)
    
      courseService.deleteCourse(reqData)
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
const express = require('express');
const routerCourses = express.Router();
const courseController = require("../../controllers/course.controller")

routerCourses
    .get('/', courseController.getAllCourses)
    .get('/:month', courseController.getMonthCourses)
    .get('/calendar/event/:province/:month/:day',courseController.getEvent)
    .get('/name', courseController.getCourseName)
    .get('/documentation/:courseCode',courseController.getDocumentation)
    .get('/room/:courseCode',courseController.getCourseRoom)
    .get('/:courseCode',courseController.getCourseData)
    .post('/uploadExcel',courseController.postExcelData)
    .put('/update/course',courseController.updateCourse)

module.exports = routerCourses;
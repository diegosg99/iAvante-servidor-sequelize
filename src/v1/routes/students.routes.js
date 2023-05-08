const express = require('express');
const routerStudents = express.Router();
const studentController = require("../../controllers/student.controller")

routerStudents
    .get('/', studentController.getAllStudents)
    .get('/course/:id', studentController.getCourseStudents)
    .put('/update',studentController.updateStudent)
    .get('/data/:id',studentController.getStudent)
    .post('/uploadExcel',studentController.postExcelData)

module.exports = routerStudents;
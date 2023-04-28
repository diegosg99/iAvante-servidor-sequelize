const express = require('express');
const routerAdmins = express.Router();
const adminController = require("../../controllers/admin.controller")

routerAdmins
    .post('/register', adminController.registerAdmin)
    .post('/login', adminController.loginAdmin)
    .get('/admin/:username',adminController.getAdmin)
    .get('/checkToken/:token',adminController.checkToken)

module.exports = routerAdmins;
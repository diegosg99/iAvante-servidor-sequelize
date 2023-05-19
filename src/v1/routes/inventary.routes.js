const express = require('express');
const routerInventary = express.Router();
const inventaryController = require("../../controllers/inventary.controller")

routerInventary
    .get('/', inventaryController.getAllItems)

module.exports = routerInventary;
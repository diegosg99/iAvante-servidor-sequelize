const express = require('express');
const routerInventary = express.Router();
const inventaryController = require("../../controllers/inventary.controller")

routerInventary
.get('/', inventaryController.getAllItems)
.get('/sellers', inventaryController.getAllSellers)
.get('/prices', inventaryController.getAllPrices)

module.exports = routerInventary;
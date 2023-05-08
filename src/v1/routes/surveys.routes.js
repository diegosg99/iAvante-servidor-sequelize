const express = require('express');
const routerSurveys = express.Router();
const surveyController = require("../../controllers/survey.controller")

routerSurveys
    .post('/upload/survey', surveyController.uploadSurvey);

module.exports = routerSurveys;
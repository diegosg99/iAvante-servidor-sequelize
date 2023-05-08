const surveyService = require("../services/survey.service");

const uploadSurvey = (req, res) => {
    let item = req.body;

    surveyService.uploadSurvey(item)
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

module.exports = {
    uploadSurvey
};
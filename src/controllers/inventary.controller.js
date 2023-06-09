const inventaryService = require("../services/inventary.service");

const getAllItems = (req, res) => {

    inventaryService.getAllItems()
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const getAllSellers = (req, res) => {

    inventaryService.getAllSellers()
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const getAllPrices = (req, res) => {

    inventaryService.getAllPrices()
        .then(({status,data}) => {
            console.log(data);
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

module.exports = {
    getAllItems,
    getAllSellers,
    getAllPrices
}
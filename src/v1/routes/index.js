const express = require('express');
const router = express.Router();

router
    .route("/")
    .get((req,res) => {
        res.send('q paso bebe')
    });

 module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/calendar/events/:province/:month/:day',(req,res) => {
    try{
        let data = req.params;
        let sql = `SELECT * FROM eventos WHERE month = `+data.month+` AND day= `+data.day+` AND province = `+data.province+`;`;
        console.log(sql);
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            res.status(200).send({rows});
            });
    }catch(error){
        res.status(400).send({msg:"Error"});
    }
  })

router.get('/calendar/events/:month',(req,res) => {
    try{
        let data = req.params.month;
        let sql = `SELECT * FROM eventos WHERE month = `+data+`;`;
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            res.status(200).send({rows});
            });
    }catch(error){
        res.status(400).send({msg:"Error"});
    }
  })

  module.exports = router;
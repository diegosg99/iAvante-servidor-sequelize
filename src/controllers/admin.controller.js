const adminsService = require("../services/admin.service");
const bcryptService = require("../services/bcrypt.service");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = '614f4f4a6568e9ae881c76e8753f65c9';

const registerAdmin = async (req, res) => {

    let data = req.body;
    let encodedPassword = await bcryptService.encodePassword(data.password);

    adminsService.registerAdmin(data,encodedPassword)
        .then(({status,data}) => {
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const loginAdmin = async (req, res) => {

    let item = req.body;

    adminsService.getAdmin(item.username)
    .then(({status,data}) => {
        bcrypt.compare(item.password,data[0].password)
        .then(bool=>{
            if (bool===true) {
                const token = jwt.sign(item.username,SECRET);
                data[0].token = token;
                console.log(data);
                res.status(status).send(data);                
            }
            else{
                res.status(status).send(data);                
            }   
        })
    })
    .catch(({status,data}) => {
        res.status(status).send(data);
    });   
    // adminsService.loginAdmin(data)
    //     .then(({status,data}) => {
            
    //     })
    //     .catch(({status,data}) => {
    //         status = 234;
    //         console.log(data);
    //         res.status(status).send(data);
    //     });    
}

const getAdmin = (req, res) => {

    let data = req.params.username;
    console.log(data);
    adminsService.getAdmin(data)
        .then(({status,data}) => {
            res.status(status).send(data);
        })
        .catch(({status,data}) => {
            res.status(status).send(data);
        });    
}

const checkToken = (req, res) => {
    try{
        let token = req.params.token;
        let username = jwt.verify(token,SECRET)
    
        res.status(200).send(username)
    
    }catch(error) {
        res.status(400).send(req);
    }
}

module.exports = {
    registerAdmin,
    loginAdmin,
    getAdmin,
    checkToken
}
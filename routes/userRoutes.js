const express = require("express");
var router = express.Router();
const  usercontroller = require("../controller/userController");
 router.post('/add',usercontroller.registeruser)
 module.exports = router;
const express = require("express")
const router = express.Router()
const employeeController = require("../controller/employeeController")
//app.use(express.json())
// const app = express()

router.get('/employee/:age',employeeController.getEmployee)
module.exports = router
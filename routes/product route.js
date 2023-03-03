const express = require("express");
var router = express.Router();
const productcontroller = require("../controller/ProductController");

router.post('/addproduct',productcontroller.addproduct);
router.get('/allproduct',productcontroller.getAllproduct);
router.delete('/delete/:id',productcontroller.deleteproduct);
router.put('/update/:id',productcontroller.updateproduct);
router.get('/getbyid/:id',productcontroller.getproductbyId)
module.exports = router;
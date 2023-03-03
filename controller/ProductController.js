const productSchema = require("../model/productschema")
const jwt = require('jsonwebtoken');
const secretkey = "secretkey";
exports.addproduct = (req, res) => {
    var product = new productSchema(req.body);
    console.log(product);
    product.save((err, data) => {
        if (err) {
            res.status(501).json({ 
                message: "error",
            })
        } else {
            res.status(201).json({
                message: "product added",
                data: data
            })
           
        }
        

    })
}
exports.getAllproduct = (req, res) => {
    productSchema.find((err, data) => {
        if (err) {
            res.status(501).json({
                message: "error",
            })
        } else {
            res.status(201).json({
                message: "All Products",
                data: data,
            })
        }
    })
}

exports.deleteproduct = (req, res) => {
    var id = req.params.id;
    productSchema.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "error",
            })
        } else {
            if (data != null) {
                res.status(200).json({
                    message: "deleted",
                    data: data
                })

            } else {
                res.status(404).json({
                    message: "product not found",
                })
            }
        }


    }
    )
}
exports.updateproduct = (req,res)=>{
    var id = req.params.id;
    productSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(501).json({
                message : "error"
            })
    }else{
        res.status(200).json({
            messsage : "Product updated",
            data : data,
        })
    }
})

}

exports.getproductbyId = (req,res)=>{
    var id = req.params.id;
    productSchema.findById(id,req.body,(err,data)=>{
        if(err){
            res.status(501).json({
                message : "error"
            })
    }else{
        res.status(200).json({
            messsage : "Product found",
            data : data,
        })
    }
})

}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
        },
        price:{
            type:Number,
            
            },
            qty:{
                type:Number,
            }
})
module.exports = mongoose.model("product",productSchema)
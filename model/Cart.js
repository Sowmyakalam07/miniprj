//import mongoose
const mongoose = require('mongoose')
//create schema
const cartSchema = new mongoose.Schema({
    p_id:Number,
    p_img:String,
    p_cost:Number,
    qyt:Number,
    u_name:String
})
module.exports = mongoose.model("Cart",cartSchema)
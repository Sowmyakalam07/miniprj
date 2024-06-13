//import express module
const express = require('express')
//create router interface
const router = express.Router()
//import productApi
const cartApi = require('../api/cartApi')
//fetch all records
router.get("/fetch",cartApi.cart_all)
//insert a record
router.post("/insert", cartApi.insert_cart)
//update a record
router.put("/update", cartApi.update_cart)
//delete a record
router.delete("/delete", cartApi.delete_cart)

//export router
module.exports = router
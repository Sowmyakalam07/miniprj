//import express module
const express = require('express')
//create router interface
const router = express.Router()
//import productApi
const userApi = require('../api/userApi')
//fetch all records
router.get("/fetch",userApi.users_all)
//insert a record
router.post("/insert", userApi.insert_user)
//update a record
router.put("/update", userApi.update_user)
//delete a record
router.delete("/delete", userApi.delete_user)

//export router
module.exports = router
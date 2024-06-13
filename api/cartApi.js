//import db schema
const Cart = require('../model/Cart')
//get cart details
const cart_all = async (req, res) => {
    let u_name = req.body.u_name
    try {
        const cart = await Cart.find({u_name})
        console.log('Products in cart displayed')
        res.json(cart)
    }
    catch (error) {
        console.log('Fetch error :- ', error)
        res.json({ 'message': error })
    }
}
//Add a product to cart
const insert_cart = async (req, res) => {
    const cart = new Cart({
        p_id: req.body.p_id,
        p_img:req.body.p_img,
        p_cost: req.body.p_cost,
        qyt:req.body.qyt,
        u_name: req.body.u_name,
    })
    try {
        const savedCart = await cart.save()
        console.log('Added to Cart')
        res.send(savedCart)
    }
    catch (error) {
        res.status(400).send(error)
    }
}
//update cart
const update_cart = async (req, res) => {
    let u_name = req.body.u_name
    let p_id = req.body.p_id
    const cart = {
        qyt: req.body.qyt
    }
    try {
        const updateCart = await Cart.updateOne(
            { u_name,p_id }, cart
        )
        if (updateCart.modifiedCount != 0) {
            console.log('Cart data updated', updateCart)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('Cart not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}


//delete cart item
const delete_cart = async (req, res) => {
    const cart = {
        p_id: req.body.p_id,
        u_name: req.body.u_name
    }
    try {
        const deletedcart = await Cart.deleteOne(cart)
        if (deletedcart.deletedCount != 0) {
            console.log('Cart item Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('Cart item Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {
    cart_all,
    insert_cart,
    update_cart,
    delete_cart
}
const express = require("express");
const router = express.Router();
const {Cart, User, Product } = require("../db");

//@description     Get all cart items associated w/ user
//@router          GET/api/cart
router.get("/", async (req, res, next) => {
  try {
    const cartItems = await Cart.findAll({
      include: User,
      where: {
        id: userId
      }
    });
    res.status(200).json(cartItems);
  } catch (err) {
    next(err);
  }
});
// Include Cart Model in user api routes


//@description    Add products to cart
//@router         POST/api/cart
router.post("/", async (req, res, next) => {
  try {
    const addedProduct = req.body
    const createCart = await Cart.create(addedProduct)
    res.json(createCart)
  } catch (err) {
    next(err);
  }
});
//Group ideas
    //This has a connection to the product --> join?
    //Grab product by product id? cart or product?
    //Magic Method with query?
    //Cart.setProduct()




//@description    Delete the shopping cart
//@router         DELETE/api/cart/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProduct = await Cart.findByPk(req.params.id)
    await deletedProduct.destroy();
  } catch (err) {
    next (err)
  }
})


//@description    Update quantity of product in shopping cart
//@router         PUT/api/cart/:id
router.put("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Cart.findByPk(req.params.id)
    await updatedProduct.update(req.body);
    res.json(updatedProduct)
  } catch (err) {
    next(err)
  }
})




module.exports = router








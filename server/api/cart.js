const express = require("express");
const router = express.Router();
const {Cart, User, Product } = require("../db");

//@description     Get all items in cart by cart/orderId
//@router          GET/api/cart/:orderId
router.get("/:orderId", async (req, res, next) => {
  try {
    const orderById = Cart.find({
      include: Product,
      where: {

      }
    })
    res.json(orderById)
  } catch (err) {
    next(err);
  }
})


//Get the userID when the user signs in
//Look for orders that belong to userid and are  open (payment status: false)
// Using my through table (Cart_Products) fetch the products that are associated or linked to a specified orderID.

//User Story --
//Brandy is already logged into Amazon. When she adds a phone to cart, her userid is linked to "Brandy's Unpaid Orders" [Remember I can have multiple carts with various other orders from previous purchases, but I am now just focusing on current order]. To view items in my current order cart, I need to identify the products that are linked to my open order id.






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

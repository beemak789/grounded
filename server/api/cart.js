const router = require('express').Router();
const { reporters } = require('mocha');
const {
  models: { Cart, User, Product, Cart_Product },
} = require('../db');
const { isLoggedIn } = require("./gatekeepingMiddleware")

//@description     Get all items in cart for the user logged in/passed in
//@router          GET/api/cart/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const orderById = await Cart.findAll({
      include: Product,
      where: {
        orderStatus: "UNPAID",
        userId: req.params.userId,
      },
    });
    res.json(orderById);
  } catch (err) {
    next(err);
  }
});

// @description    Add products to cart for the user logged in/passed in
// @router         POST/api/cart/:userId
router.post('/:userId', async (req, res, next) => {
  try {
    const addedProduct = await Product.findByPk(req.body.id);
    const userCart = await Cart.findAll({
      where: {
        orderStatus: "UNPAID",
        userId: req.params.userId
      }
    })
    const add = await addedProduct.addCart(userCart)
    res.json(add)
  } catch (err) {
    next(err);
  }
});




//@description    Delete the shopping cart for the logged in user?
//@router         DELETE/api/cart/:userId
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedProduct = await Cart.findByPk(req.params.id);
    console.log(deletedProduct)
    await deletedProduct.destroy();
    res.json(deletedProduct)
  } catch (err) {
    console.log("There is an err in your delete cart route");
    next(err);
  }
});

//@description    Update quantity of product in shopping cart for the logged in user
//@router         PUT/api/cart/:userId

//Error - Missing where attribute in the options parameter
router.put('/:userId', async (req, res, next) => {
  try {
    const orderById = await Cart.findAll({
      include: Product,
      where: {orderStatus: "UNPAID", userId: req.params.userId}
    })
    const updatedOrder = await Cart.update(req.body);
    res.json(updatedOrder)
  } catch (err) {
    next(err);
  }
});



module.exports = router;






//Get request
//This can also work:
    // const orderById = await User.findOne({
    //   include: {
    //     model: Cart,
    //     include: Product,
    //     where: {
    //       paymentStatus: false,
    //     }
    //   },
    //   where: {
    //     id: req.params.userId,
    //   },
    // });

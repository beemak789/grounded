const router = require('express').Router();
const { reporters } = require('mocha');
const {
  models: { Cart, User, Product, Cart_Product },
} = require('../db');

//Notes

//CRUD OPERATIONS [ CREATE, RETRIEVE, UPDATE, DELETE ]
//@description     Get all items in cart for the user logged in/passed in
//@router          GET/api/cart/:userId
// https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findOrCreate
router.get('/:userId', async (req, res, next) => {
  try {
    const [currentCart, created] = await Cart.findOrCreate({
      include: Product,
      where: {
        orderStatus: 'UNPAID',
        userId: req.params.userId,
      },
    });
    console.log(currentCart);
    res.json(currentCart);
  } catch (err) {
    next(err);
  }
});

//This handles both ADD TO CART, DELETE FROM CART (update requests)
router.put('/:userId', async (req, res, next) => {
  try {
    const [userCart, created] = await Cart.findOrCreate({
      where: {
        orderStatus: 'UNPAID',
        userId: req.params.userId,
      },
    });

    const targetProduct = await Product.findByPk(req.body.productId);

    await userCart.addProduct(targetProduct); //TODO

    const cartProducts = await userCart.getProducts();
    const chosenProduct = cartProducts.filter(
      (product) => targetProduct.id === product.id
    )[0];
    const newQuantity = req.body.quantity;
    const currentQuantity = chosenProduct.Cart_Product.quantity; //6

    const updatedQuantity = newQuantity + currentQuantity;

    if (updatedQuantity <= 0) {
      await userCart.removeProduct(targetProduct);
    } else {
      await Cart_Product.update(
        { quantity: newQuantity + currentQuantity },

        {
          where: {
            productId: targetProduct.id,
            cartId: userCart.id,
          },
        }
      );
    }

    res.json({ updatedQuantity });
  } catch (err) {
    next(err);
  }
});





module.exports = router;

///-----------------------------------------------------------------
//PUT ROUTE



// const newProduct = await Product.findByPk(req.body.productId);
// const userCart = await Cart.findOne({
//   where: {
//     orderStatus: 'UNPAID',
//     userId: req.params.userId,
//   },
// });
// const productExists = await userCart.hasProduct(newProduct)

// console.log("HAS PRODUCT--->", productExists)
// res.json(userCart)


//Some tips
//Get state
//initial state to local storage
//JSON.stringify
//incrementig decrementing the field -- await the fields update
//creating model methods - find cart order

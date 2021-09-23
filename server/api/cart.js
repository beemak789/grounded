const router = require('express').Router();
const {
  models: { Cart, User, Product, Cart_Product },
} = require('../db');

//@description     Get all items in cart for the user logged in/passed in
//@router          GET/api/cart/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const orderById = await Cart.findAll({
      include: Product,
      where: {
        paymentStatus: false,
        userId: req.params.userId,
      },
    });
    res.json(orderById);
  } catch (err) {
    next(err);
  }
});
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


//@description    Add products to cart for the user logged in/passed in
//@router         POST/api/cart/:userId
router.post('/:userId', async (req, res, next) => {
  try {
    const addedProduct = req.body;
    const createCart = await Cart.create(addedProduct);
    res.json(createCart);
  } catch (err) {
    next(err);
  }
});




//@description    Delete the shopping cart
//@router         DELETE/api/cart/:userId
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedProduct = await Cart.findByPk(req.params.id);
    console.log(deletedProduct)
    await deletedProduct.destroy();
    res.send(deletedProduct);
  } catch (err) {
    console.log("There is an err in your delete cart route");
    next(err);
  }
});

//@description    Update quantity of product in shopping cart
//@router         PUT/api/cart/:id
router.put('/:id', async (req, res, next) => {
  try {
    const updatedProduct = await Cart.findByPk(req.params.id);
    await updatedProduct.update(req.body);
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const router = require('express').Router();
const {
  models: { Cart, User, Product, Cart_Product },
} = require('../db');
const { requireToken } = require('./gatekeepingMiddleware');

//CRUD OPERATIONS [ CREATE, RETRIEVE, UPDATE, DELETE ]

//@description     Get all items in cart for the user logged in/passed in
//@router          GET/api/cart
router.get('/', requireToken, async (req, res, next) => {
  try {
    const [currentCart, created] = await Cart.findOrCreate({
      include: Product,
      where: {
        orderStatus: 'UNPAID',
        userId: req.user.id,
      },
    });
    res.send(currentCart);
  } catch (err) {
    next(err);
  }
});
//------------------------------------------------------------------------------------
//@description    Delete the product for the user logged in
//@router         PUT/api/cart

router.put('/', requireToken, async (req, res, next) => {
  try {
    console.log(req.user)
    const productId = Number(req.body.productId);
    const [userCart, created] = await Cart.findOrCreate({
      where: {
        orderStatus: 'UNPAID',
        userId: req.user.id,
      },
    });
    const deleteThisProduct = await Product.findByPk(productId);
    const removedProduct = userCart.removeProduct(deleteThisProduct);
    res.json(removedProduct);
  } catch (err) {
    console.log('There is an err in your delete cart route');
    next(err);
  }
});
//------------------------------------------------------------------------------------
//@description    Add products to cart for the user logged in/passed in
//@router         POST/api/cart/:userId

router.post('/:userId', requireToken, async (req, res, next) => {
  try {
    let userIdReq = Number(req.params.userId);
    const userCart = await Cart.findOne({
      where: {
        orderStatus: 'UNPAID',
        userId: userIdReq,
      },
    });
    const targetProduct = await Product.findByPk(req.body.productId);
    await userCart.addProduct(targetProduct);
    const cartProducts = await userCart.getProducts();
    const chosenProduct = cartProducts.filter(
      (product) => targetProduct.id === product.id
    )[0];
    const userQuantity = +req.body.quantity;
    const currentCartQuantity = +chosenProduct.Cart_Product.quantity;
    const updatedQuantity = userQuantity + currentCartQuantity;
    await Cart_Product.update(
      { quantity: updatedQuantity },
      {
        where: {
          productId: targetProduct.id,
          cartId: userCart.id,
        },
      }
    );

    // fetch cart with updated quantities
    const updatedCart = await Cart.findOne({
      include: Product,
      where: {
        orderStatus: 'UNPAID',
        userId: userIdReq,
      },
    });
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

//------------------------------------------------------------------------------------
//@description    Checkout the cart for logged in/passed in
//@router         PUT/api/cart/:userId/checkout
router.put('/:userId/checkout', async (req, res, next) => {
  try {
    const [userCart, created] = await Cart.findOrCreate({
      include: Product,
      where: {
        orderStatus: 'UNPAID',
        userId: req.params.userId,
      },
    });

    const products = userCart.products;

    products.forEach(async (product) => {
      const dbProduct = await Product.findByPk(product.id);
      const productQuantity = product.Cart_Product.quantity;
      dbProduct.decrement('inventoryQuantity', {
        by: productQuantity,
        where: { id: product.id },
      });
    });

    const customerCart = await Cart.findByPk(req.params.userId);

    const customerTotalQty = products.map((product) => {
      return product.Cart_Product.quantity
    }).reduce((accumulator, value) => {
      return accumulator + value
    }, 0);

    await customerCart.update({ orderStatus: 'PAID', totalQty: customerTotalQty });

    //NEW CART
    const newCart = await Cart.create({
      userId: req.params.userId,
    });
    res.status(200).send(newCart);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

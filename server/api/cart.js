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
    console.log(req.user);
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
//@router         PUT/api/cart/checkout
router.put('/checkout', requireToken, async (req, res, next) => {
  try {
    //Need to change the actual user cart that matches the user id, will have cart id associated with it.
    const userCart = await Cart.findOne({
      include: Product,
      where: {
        orderStatus: 'UNPAID',
        userId: req.user.id, //1
      },
    });
    // user id= 1, cartid = 5

    const products = userCart.products;

    products.forEach(async (product) => {
      const dbProduct = await Product.findByPk(product.id);
      const productQuantity = product.Cart_Product.quantity;
      dbProduct.decrement('inventoryQuantity', {
        by: productQuantity,
        where: { id: product.id },
      });
    });


    // const customerCart = await Cart.findOne({ where: userId: req.user.id});
    // finds a cart by its primary key
    //** REQ.USER.ID = 1 [BRANDY] */
    //await Cart.findByPk(req.user.id) --> find the cart with an id (iin this case, user id) = 1, every single time not really knowing its associated with a "user"

    await userCart.update({
      orderStatus: 'PAID',
    });
    //Close the user's cart
    //Then create a new cart with a NEW CART ID where orderStatus is UNPAID.

    //NEW CART
    const newCart = await Cart.create({
      //CREATE - CREATES A NEW ROW [has a unique primary key] FOR THE CART.
      userId: req.user.id,
    });
    res.status(200).send(newCart);
  } catch (err) {
    console.log(err);
  }
});

//@description    Obtain the products from the cart for logged in/passed in
//@router         PUT/api/cart/checkout/orders

router.get('/checkout/orders', requireToken, async (req, res, next) => {
  try {
    //Need to change the actual user cart that matches the user id, will have cart id associated with it.
    const userCart = await Cart.findAll({
      include: Product,
      where: {
        orderStatus: 'PAID',
        userId: req.user.id, //1
      },
    });
    res.json(userCart);
  } catch(err) {
    console.log(err)
  }
})


module.exports = router;

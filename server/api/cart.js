const router = require('express').Router();
const { reporters } = require('mocha');
const {
  models: { Cart, User, Product, Cart_Product },
} = require('../db');

//Notes

//CRUD OPERATIONS [ CREATE, RETRIEVE, UPDATE, DELETE ]
//@description     Get all items in cart for the user logged in/passed in
//@router          GET/api/cart/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const orderById = await Cart.findOrCreate({
      include: Product,
      where: {
        orderStatus: 'UNPAID',
        userId: req.params.userId,
      },
    });
    res.json(orderById);
  } catch (err) {
    next(err);
  }
});


//@description    Delete the product for the user logged in
//@router         PUT/api/cart/:userId
//SECURITY
router.put('/:userId', async (req, res, next) => {
  try {
    const productId = Number(req.body.productId);
    const userCart = await Cart.findOne({
      where: {
        orderStatus: 'UNPAID',
        userId: req.params.userId,
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

//@description    Add products to cart for the user logged in/passed in
//@router         POST/api/cart/:userId
//SECURITY
router.post('/:userId', async (req, res, next) => {
try {
  let userIdReq = Number(req.params.userId);
  console.log('body', req.body)
  const newProduct = await Product.findByPk(req.body.id);
  console.log('new product', newProduct)

  console.log('body', req.body)
  const userCart = await Cart.findOne({
    where: {
      orderStatus: 'UNPAID',
      userId: userIdReq,
    },
  });

  const addedItem = await userCart.addProduct(newProduct);

  // set or increase qty
  // querying through table -- need 2 keys -- many to many*
  // if the product exists in their cart -- update, if not findOrCreate
  const updatedInfo = await Cart_Product.update(
    { quantityItem: req.body.qtyBags,
     pricePerItem: req.body.price },
    {
      where: {
        productId: newProduct.id,
        cartId: userCart.id,
      },
    }
  );
  res.json(updatedInfo);

  }
  catch (err) {
    next(err);
  }
});

//ConsoleLogs
// console.log('added product--->', newProduct.name);
// console.log('added product--->', newProduct.id);
// console.log('added product quantity--->', newProduct.quantity);
// console.log('usercart ID', userCart.id);
//     console.log('usercart orderStatus', userCart.orderStatus);
//     console.log('usercart totalQty', userCart.totalQty);



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

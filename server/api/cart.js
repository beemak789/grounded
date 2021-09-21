const express = require("express");
const router = express.Router();
const {Cart} = require("../db");
const { User } = require("../db");
const { Product } = require("../db");




//@description     Fetch my shopping cart
//@router          GET/api/cart
router.get("/", async (req, res, next) => {
  try {
    const cartItems = await Cart.findAll();
    res.status(200).json(cartItems);
  } catch (err) {
    next(err);
  }
});


//@description    Adding to Cart
//@router         POST/api/cart
router.post("/", async (req, res, next) => {
  try {
    const object = req.body
    const createCart = await Cart.create(object)
    res.json(createCart)
  } catch (err) {
    next(err);
  }
});



//@description    Post/put in the user's shopping cart; The added product is sent as the request body
//@router         POST/api/cart/:id
router.post("/:id", async (req, res, next) => {
  try {
    const productToAdd = req.body;
    const addTheProduct = await Cart.create(productToAdd)
    res.json(addTheProduct)
  } catch (err) {
    next(err);
  }
});



module.exports = router








//Not sure about this?
//@description     Fetch the contents of my shopping cart, associated with User
//@router          GET/api/cart/:id
// router.get("/:id", async (req, res, next) => {
//   try {
//     const cartItemsByUser= await Cart.findAll({
//       include: User,
//       where: {
//         id: userId
//       }
//     });
//     res.status(200).json(cartItemsByUser);
//   } catch (err) {
//     next(err);
//   }
// });

const Sequelize = require('sequelize')
const db = require("../db")

const Cart = db.define("cart", {
  orderStatus: {
    type: Sequelize.ENUM("PAID", "UNPAID"),
    defaultValue: "UNPAID",
    allowNull: false
  },
  //We might not need this*
  // totalQty: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0
  // },
  // totalPrice: {
  //   type: Sequelize.INTEGER,
  // },
})



//Methods on Cart Model
 //update total price - get array of product prices * qty from cart_product; reduce sum
//  Cart.updateTotalPrice = function (pricesArray) {
//   this.totalPrice = pricesArray.reduce((sum, price) => sum + price);
//  }


//This is hard-coding a table with one property called "quantity"
//Adding a property to the through table
const Cart_Product = db.define("Cart_Product", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  // pricePerItem: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0
  // },
  // totalPricePerItem: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0
  // },
});

//Cart_Product Methods

//set price for order history
Cart_Product.setPrice = function (price) {
  this.PricePerItem = price;
 }

  //update quantity
Cart_Product.updateQuantity = function (qty) {
  this.quantityItem = qty;
 }

 //update total price
Cart_Product.updateTotalPricePerItem = function (price, qty) {
 this.totalPricePerItem = price * qty;
}


// Not sure about these instance methods?
// Cart.prototype.getCoffeeQuantity = async function (productId) {
//   const coffeeOrder = Cart_Product.findOne({
//     where: {
//       cartId: cartId,
//       productId: this.productId
//     }
//   })
//   return coffeeOrder.quantity;
// }


// Cart.prototype.updateCoffeeQuantity = async function (productId, newQuantity) {
//  const [coffeeOrder] = await Cart_Product.findOrCreate({
//    where: {
//      cartId: this.id,
//      productId: productId
//    }
//  })
//  await coffeeOrder.update({
//    quantity: newQuantity
//  })
// }


module.exports = {
  Cart,
  Cart_Product
}

const Sequelize = require('sequelize')
const db = require("../db")

const Cart = db.define("cart", {
  orderStatus: {
    type: Sequelize.ENUM("PAID", "UNPAID"),
    defaultValue: "UNPAID",
    allowNull: false
  },
  totalQty: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: Sequelize.INTEGER,
  },
})



//Methods on Cart Model
 //update total price - get array of product prices * qty from cart_product; reduce sum
//  Cart.updateTotalPrice = function (pricesArray) {
//   this.totalPrice = pricesArray.reduce((sum, price) => sum + price);
//  }


const Cart_Product = db.define("Cart_Product", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
//Not sure if we need these two fields because we have price of item in the Products cart and we will get total price by quantity * price per item

  pricePerItem: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPricePerItem: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
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


module.exports = {
  Cart,
  Cart_Product
}

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

//This is hard-coding a table with one property called "quantity"
//Adding a property to the through table
const Cart_Product = db.define("Cart_Product", {
  quantity: Sequelize.INTEGER,
});

module.exports = {
  Cart,
  Cart_Product
}

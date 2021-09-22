const Sequelize = require('sequelize')
const db = require("../db")

const Cart = db.define("cart", {
  paymentStatus: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  totalQty: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: Sequelize.FLOAT,
  },
})

//This is hard-coding a table with one property called "quantity"
//Adding a property to the through table
const Cart_Product = db.define("Cart_Product", {
  quantity: Sequelize.INTEGER
});

// NOTE: This is throwing an error when testing; updatedAt takes care of this scenario.
// paymentTime: {
//   type: Sequelize.DATE
// }

module.exports = {
  Cart,
  Cart_Product
}

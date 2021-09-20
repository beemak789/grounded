const Sequelize = require('sequelize')
const db = require("../db")

const Cart = db.define("cart", {
  paymentStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  totalQty: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: Sequelize.FLOAT,
  }
})


module.exports = Cart

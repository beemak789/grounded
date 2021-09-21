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
  paymentTime: {
    type: Sequelize.TIME
  }
})


module.exports = Cart

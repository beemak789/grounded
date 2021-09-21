const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  description: {
    type: Sequelize.TEXT
  },
  price:  {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  stars: {
    type: Sequelize.FLOAT
  }
})

module.exports = Product;

//this is the access point for all things database related!

const db = require('./db')

const User= require("./models/User")
const Product= require("./models/Product")
const { Cart, Cart_Product } = require("./models/Cart")


//associations

User.hasMany(Cart);
Cart.belongsTo(User);

Product.belongsToMany(Cart, { through: 'Cart_Product' });
Cart.belongsToMany(Product, { through: 'Cart_Product' });

module.exports = {
  db,
  models: {
    User,
    Cart,
    Product,
    Cart_Product
  },
};

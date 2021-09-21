//this is the access point for all things database related!

const db = require('./db')

const {User, Cart, Product} = require('./models')


//associations
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart);
Cart.belongsToMany(Product);

module.exports = {
  db,
  models: {
    User,
    Cart,
    Product
  },
}

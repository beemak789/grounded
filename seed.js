/* eslint-disable no-unused-vars */
const { db } = require('./server/db');
const {
  models: { Cart, Product, User },
} = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });

    //Coffee Product Instances
    const coffee1 = await Product.create({
      name: 'Friday Night Lattes',
      description:
        'Wind down with our 100% certified organic and non-GMO blend of Hondouran beans. This artisan blend hints at honey, caramel, and cocoa.',
      quantity: 10,
      price: 25.99,
      stars: 4.0,
    });

    const coffee2 = await Product.create({
      name: 'Cult Classic',
      description:
        'Small batch roasted coffee that has a cult following stronger than qAnon. This blend has a strong but clean taste with no trace of bitterness. The organic beans are sourced from rain forests in Columbia, Guatemala and Sumatra.',
      quantity: 5,
      price: 29.99,
      stars: 4.5,
    });

    const coffee3 = await Product.create({
      name: 'Brewing Trouble',
      description:
        'Feeling like you want some excitement?  Turn to these peaberry coffee beans that offer a tarty blend of acidity and sweetness guaranteed to wake you up and put a mischevious smile on your face.',
      quantity: 4,
      price: 27.99,
      stars: 4.0,
    });

    const coffee4 = await Product.create({
      name: 'Cherry on Top',
      description:
        'Handcrafted organic blend from Typica and Caturra. Each cup will taste of sweet cherries.',
      quantity: 3,
      price: 27.99,
      stars: 3.5,
    });

    const coffee5 = await Product.create({
      name: 'Feeling Lucky',
      description:
        'This bold and dark roast has the sweetness of a medium roast and the unique attributes of peaberry. The blend includes ethically sourced organic beans from Colombia, Hondura and Ethiopia.',
      quantity: 5,
      price: 29.99,
      stars: 3.5,
    });
    //-------------------------------------------------------------------

    //User Instances
    const user1 = await User.create({
      username: 'brandy',
      password: 'apple',
      name: 'Brandy',
      email: 'brandy@gmail.com',
      isAdmin: false,
    });

    const user2 = await User.create({
      username: 'alan',
      password: 'banana',
      name: 'Alan',
      email: 'alan@gmail.com',
      isAdmin: false,
    });
    //-------------------------------------------------------------------
    //Cart Instances
    const cart1 = await Cart.create({
      paymentStatus: true,
      totalQty: 2,
      totalPrice: 10.0,
    });

    const cart2 = await Cart.create({
      paymentStatus: false,
      totalQty: 1,
      totalPrice: 5.0,
    });

    const cart3 = await Cart.create({
      paymentStatus: false,
      totalQty: 3,
      totalPrice: 15.0,
    });
    //-------------------------------------------------------------------
    // ------------------- MAGIC METHODS ---------------------------------

    console.log(Object.keys(User.prototype))
    //Setting User to Cart
    await user1.addCart(cart1);
    await user1.addCart(cart3);
    await user2.addCart(cart2);

    //Adding Products to Cart
    //---> 3 Products in Cart1, associated to user1
    await coffee2.addCart(cart1);
    await coffee1.addCart(cart1);
    await coffee3.addCart(cart1);

    // ---> 3 Products in Cart2, associated to user2
    await coffee4.addCart(cart2);
    await coffee5.addCart(cart2);

    // ---> 1 Products in Cart3, associated to user2
    await coffee4.addCart(cart3);

  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success - seedJS!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}

const { db } = require("./server/db");
const {User, Product, Cart} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

    const fridayNight = await Product.create({
      name: 'Friday Night Lattes',
      description: 'Wind down with our 100% certified organic and non-GMO blend of Hondouran beans. This artisan blend hints at honey, caramel, and cocoa.',
      price: 25.99,
      stars: 4.0,
    });

    const cultClassic = await Product.create({
      name: 'Cult Classic',
      description: 'Small batch roasted coffee that has a cult following stronger than qAnon. This blend has a strong but clean taste with no trace of bitterness. The organic beans are sourced from rain forests in Columbia, Guatemala and Sumatra.',
      price: 29.99,
      stars: 4.5,
    });

    const brewTrouble = await Product.create({
      name: 'Brewing Trouble',
      description: 'Feeling like you want some excitement?  Turn to these peaberry coffee beans that offer a tarty blend of acidity and sweetness guaranteed to wake you up and put a mischevious smile on your face.',
      price: 27.99,
      stars: 4.0,
    });

    const cherryOnTop = await Product.create({
      name: 'Cherry on Top',
      description: 'Handcrafted organic blend from Typica and Caturra. Each cup will taste of sweet cherries.',
      price: 27.99,
      stars: 3.5,
    });

    const feelingLucky = await Product.create({
      name: 'Feeling Lucky',
      description: 'This bold and dark roast has the sweetness of a medium roast and the unique attributes of peaberry. The blend includes ethically sourced organic beans from Colombia, Hondura and Ethiopia.',
      price: 29.99,
      stars: 3.5,
    });

    const justPeachy = await Product.create({
      name: 'Just Peachy',
      description: 'This 100% free trade Brazilian Arabica blends deep notes of peaches with a smooth and creamy finish.',
      price: 27.99,
      stars: 4.0,
    });

    const roseColored = await Product.create({
      name: 'Rose Colored Glasses',
      description: 'Free trade and gluten free Hondouran beans which result in a swirl of vanilla, caramel and roses. Smooth and creamy, this light roast can get you through any week.',
      price: 25.99,
      stars: 4.5,
    });

    const insomnia = await Product.create({
      name: 'Insomnia',
      description: 'Free trade and organic blend of the strongest beans that we could find. Actual beans are a secret. However, this dark roast is creamy and deep. Tastes like hazenut vanilla with a hint of cinnamon.',
      price: 49.99,
      stars: 4.5,
    });

    const beLatte = await Product.create({
      name: 'I will be latte',
      description: 'Some days you just want to take your time and that is fine.  Pour yourself a cup of this delicious Kopi luwak coffee from Indonesia.',
      price: 57.99,
      stars: 5.0,
    });

    const beFine = await Product.create({
      name: 'It will be fine',
      description: 'Chocolate makes everything okay. This blend of honduran dark roast throws you into chocolate heaven.',
      price: 27.99,
      stars: 4.0
    });


    //Associations

    // await student1.setCampus(campus1);



  } catch (err) {
    console.log(red(err));
  }


};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch(err => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}

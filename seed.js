/* eslint-disable no-unused-vars */
const { db } = require('./server/db');
const {
  models: { Cart, Product, User, Cart_Product },
} = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });

    //Coffee Product Instances
    const coffee1 = await Product.create({

      name: 'Friday Night Lattes',
      description:
        'Wind down with our 100% certified organic and non-GMO blend of Hondouran beans. This artisan blend hints at honey, caramel, and cocoa.',
      inventoryQuantity: 10,
      imageUrl: 'https://i.imgur.com/aNxqxjb.jpeg',
      price: 2599,
      stars: 4.0,
    });

    const coffee2 = await Product.create({
      name: 'Cult Classic',
      description:
        'Small batch roasted coffee that has a cult following stronger than qAnon. This blend has a strong but clean taste with no trace of bitterness. The organic beans are sourced from rain forests in Columbia, Guatemala and Sumatra.',
      inventoryQuantity: 5,
      imageUrl: 'https://i.imgur.com/Ytkx0eq.jpeg',
      price: 2999,
      stars: 4.5,
    });

    const coffee3 = await Product.create({
      name: 'Latte Larrys',
      description:
        'Feeling like you want some excitement?  Turn to these peaberry coffee beans that offer a tarty blend of acidity and sweetness guaranteed to wake you up and put a mischevious smile on your face.',
      inventoryQuantity: 0,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      price: 2799,
      stars: 4.0,
    });

    const coffee4 = await Product.create({
      name: 'Cherry on Top',
      description:
        'Handcrafted organic blend from Typica and Caturra. Each cup will taste of sweet cherries.',
      inventoryQuantity: 3,
      imageUrl: "https://i.imgur.com/J0qmJsM.jpeg",
      price: 2799,
      stars: 3.5,
    });

    const coffee5 = await Product.create({
      name: 'Feeling Lucky',
      description:
        'This bold and dark roast has the sweetness of a medium roast and the unique attributes of peaberry. The blend includes ethically sourced organic beans from Colombia, Hondura and Ethiopia.',
      inventoryQuantity: 0,
      imageUrl: "https://i.imgur.com/aNxqxjb.jpeg",
      price: 2999,
      stars: 3.5,
    });

    const justPeachy = await Product.create({
      name: 'Just Peachy',
      description:
        'This 100% free trade Brazilian Arabica blends deep notes of peaches with a smooth and creamy finish.',
      inventoryQuantity: 10,
      imageUrl: 'https://i.imgur.com/Ytkx0eq.jpeg',
      price: 2799,
      stars: 4.0,
    });

    const roseColored = await Product.create({
      name: 'Rose Colored Glasses',
      description:
        'Free trade and gluten free Hondouran beans which result in a swirl of vanilla, caramel and roses. Smooth and creamy, this light roast can get you through any week.',
      inventoryQuantity: 20,
      imageUrl: 'https://i.imgur.com/Ytkx0eq.jpeg',
      price: 2599,
      stars: 4.5,
    });

    const insomnia = await Product.create({
      name: 'Insomnia',
      description:
        'Free trade and organic blend of the strongest beans that we could find. Actual beans are a secret. However, this dark roast is creamy and deep. Tastes like hazenut vanilla with a hint of cinnamon.',
      inventoryQuantity: 200,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      price: 4999,
      stars: 4.5,
    });

    const beLatte = await Product.create({
      name: 'I will be latte',
      description:
        'Some days you just want to take your time and that is fine.  Pour yourself a cup of this delicious Kopi luwak coffee from Indonesia.',
      inventoryQuantity: 25,
      imageUrl: 'https://i.imgur.com/aNxqxjb.jpeg',
      price: 5799,
      stars: 5.0,
    });

    const beFine = await Product.create({
      name: 'It will be fine',
      description:
        'Chocolate makes everything okay. This blend of honduran dark roast throws you into chocolate heaven.',
      inventoryQuantity: 200,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      price: 2799,
      stars: 4.0,
    });

    const isGrind = await Product.create({
      name: "It's a Grind",
      description:
        'A complex coffee with an exotic and syrupy body with hints of chocolate, vanilla and spice. Does well as a light roast and dark roast.',
      inventoryQuantity: 60,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      price: 3999,
      stars: 3,
    });

    const whipped = await Product.create({
      name: 'Whipped',
      description:
        'The trademark “Whipped” removes caffeine from coffee without the use of solvents or chemicals. This coffee is characterized by delicate sweetness, gentle acidity and round flavor and suitable for roasting and brewing as either an espresso or drip brew.',
      inventoryQuantity: 10,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      price: 1499,
      stars: 4.5,
    });

    const dejabrew = await Product.create({
      name: 'Deja Brew',
      description:
        'An enticing aroma of floral and spice greets the nose. This pleasing cup possesses a sweet and rounded taste along with a delicate acidity and medium body characteristic of coffee blended from South American origins.',
      inventoryQuantity: 200,
      imageUrl: 'https://i.imgur.com/aNxqxjb.jpeg',
      price: 1499,
      stars: 4.5,
    });

    const revival = await Product.create({
      name: 'Revival',
      description:
        'A soaring lightness and lovely balance of sweet and dry tones distinguishes this Costa Rican coffee. This is the coffee equivalent of a fine Beaujolais, with its dry, bright tones and delicate sweetness. Its clean, crisp character will please coffee lovers.',
      inventoryQuantity: 35,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      price: 3599,
      stars: 3.5,
    });

    const jivajitters = await Product.create({
      name: 'Java Jitters',
      description:
        'Another of the classic Ethiopian coffee regions, Sidamo coffees are known for medium body, delicate fruits, spice, and citrus. Our FTO Natural Sidamo fits the bill.',
      inventoryQuantity: 35,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      price: 4599,
      stars: 3.5,
    });

    const mochaMadness = await Product.create({
      name: 'Mocha Madness',
      description:
        'A striking combination of nutty, chocolaty aromas greet the expectant nose. Careful blending of coffees from Indonesia and Central America creates an exceptionally well balanced taste providing a bright, yet deep-toned acidity with a delicate sweetness. An exceptional cup of coffee!',
      price: 1099,
      inventoryQuantity: 35,
      imageUrl: 'https://i.imgur.com/aNxqxjb.jpeg',
      stars: 2.5,
    });

    const beanThere = await Product.create({
      name: 'Bean There, Done That',
      description:
        'This region’s rich volcanic soil and cool weather provide the perfect conditions to produce one of the world’s best coffees.  It offers an exquisite roundness and pleasant mouth-feel, which can satisfy the most demanding palates.',
      price: 3599,
      inventoryQuantity: 250,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 3,
    });

    const brewedAwake = await Product.create({
      name: 'Brewed Awakening',
      description:
        'Aromatic hints of spice and caramel with flavor notes of berries and citrus. Full bodies with honeyed sweetness.',
      price: 1899,
      inventoryQuantity: 250,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 3,
    });

    const awake = await Product.create({
      name: 'Awake and Afraid',
      description:
        'At their best, Peru coffees are delicately sweet, round, and gentle acidity. This Peru is delicately sweet, fragrant, delicate yet rich, with a discreet but vibrant acidity. Makes a fine single origin espresso in the classic northern Italian style.',
      price: 1899,
      inventoryQuantity: 90,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.5,
    });

    const truly = await Product.create({
      name: 'Truly Espresso’d',
      description:
        'A cosmopolitan blend that combines coffees from Latin America, the Pacific, and east Africa. Fruit and chocolate-toned aromatics shimmer over robust, slightly earthy bottom tones. Edgy yet elegant.',
      price: 2599,
      inventoryQuantity: 200,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.5,
    });

    const grace = await Product.create({
      name: 'Grace Blend',
      description:
        'A smooth light roast with tones of trailblazing and inspiring programming design.',
      price: 2000,
      inventoryQuantity: 20,
      imageUrl: 'https://i.imgur.com/aNxqxjb.jpeg',
      stars: 4.8,
    });

    const hopped = await Product.create({
      name: 'Au Hopped Up',
      description: 'A zangy medium roast that will keep you coding for hours.',
      price: 2400,
      inventoryQuantity: 150,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.7,
    });

    const theGrind = await Product.create({
      name: 'The Grind',
      description:
        'A solid dark roast for the days you just need to get things done.',
      price: 2100,
      inventoryQuantity: 100,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.5,
    });

    const breakthrough = await Product.create({
      name: 'Breakthrough',
      description: 'A medium blend to accompany all your aha moments in life',
      price: 2200,
      inventoryQuantity: 150,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.8,
    });

    const asyncAl = await Product.create({
      name: 'Async Allegory',
      description:
        'A hardcore blend for those nonsyncronous nights with a single throughline.',
      price: 2100,
      inventoryQuantity: 60,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.5,
    });

    const recursion = await Product.create({
      name: 'Recursion',
      description:
        'A complex blend with almost circular tones— this blend will leave your head spinning!',
      price: 2000,
      inventoryQuantity: 29,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.1,
    });

    const boolean = await Product.create({
      name: 'Boolean Blend',
      description: 'This blend will put you in a decisive true or false mood.',
      price: 2200,
      inventoryQuantity: 86,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.6,
    });

    const fullstack = await Product.create({
      name: 'Fullstack Flavor Bomb',
      description: 'A top-ranked blend for those early bootcamp mornings.',
      price: 2100,
      inventoryQuantity: 20,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.9,
    });

    const ifElse = await Product.create({
      name: `If Else`,
      description:
        'If you drink this blend, good things will happen. Else, watch out!',
      price: 2400,
      inventoryQuantity: 200,
      imageUrl: "https://i.imgur.com/J0qmJsM.jpeg",
      stars: 4.8,
    });

    const gitGoing = await Product.create({
      name: 'Git Going',
      description: `An early morning light roast blend to give you energy to get your day started!`,
      price: 2300,
      inventoryQuantity: 120,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4.4,
    });

    const zemlak = await Product.create({
      name: 'Zemlak',
      description:
        'Impedit earum porro eos sequi velit molestias facere. Ullam est harum repellat saepe et totam explicabo eum labore. Occaecati impedit eum. Voluptates officiis sit in quibusdam molestiae deserunt dicta velit ex. Quas adipisci iure.',
      price: 2220,
      inventoryQuantity: 96,
      imageUrl: "https://i.imgur.com/J0qmJsM.jpeg",
      stars: 1,
    });

    const harvey = await Product.create({
      name: 'Harvey',
      description:
        'Cumque possimus unde vero dolorum maxime in sunt. Rerum nesciunt qui. Officiis hic in ducimus natus vel eum.',
      price: 3520,
      inventoryQuantity: 12,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 5,
    });

    const glover = await Product.create({
      name: 'Glover',
      description:
        'Tenetur ipsum eligendi voluptates voluptatem architecto laboriosam totam est. A sed occaecati est. In enim rerum nobis quibusdam accusamus doloremque rerum deleniti.',
      price: 5580,
      inventoryQuantity: 80,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4,
    });

    const nicolas = await Product.create({
      name: 'Nicolas',
      description:
        'Quod labore est. Dolorum porro rem et. Libero voluptatem quidem harum ut.',
      price: 4990,
      inventoryQuantity: 73,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4,
    });

    const yolanda = await Product.create({
      name: 'Yolanda',
      description:
        'Odio eos aut consectetur eaque. Culpa et excepturi. Ullam quam voluptas porro et sit reiciendis vero vel. Et atque unde amet tempora quia.',
      price: 6940,
      inventoryQuantity: 11,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 2,
    });

    const erdman = await Product.create({
      name: 'Erdman',
      description:
        'Qui sit repudiandae earum. Laboriosam sit et perspiciatis recusandae molestiae exercitationem molestiae ratione ut. Incidunt iste sint eum. Nihil molestias laborum placeat id. Suscipit non dolorum maxime veniam iste.',
      price: 9700,
      inventoryQuantity: 33,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4,
    });

    const cole = await Product.create({
      name: 'Cole',
      description:
        'Repellat ut enim magnam possimus amet reiciendis doloremque et nihil. Quia explicabo ullam id iste sunt laudantium pariatur sint. Aspernatur est corporis iste et incidunt consequatur maiores. Pariatur inventore est sit laborum natus. Eligendi dolorem cum hic dolorem corrupti. Voluptates vero corporis cum soluta.',
      price: 8670,
      inventoryQuantity: 89,
      imageUrl: 'https://i.imgur.com/T63fRGe.jpeg',
      stars: 4,
    });

    // const sheila = await Product.create({
    //   name: 'Sheila',
    //   description:
    //     'Rem commodi et soluta at inventore exercitationem quia. Dignissimos sed quis illum perspiciatis. Totam beatae molestiae iste fugit sed fuga dolorem placeat explicabo. Qui dolorem dolor veniam sequi odit qui. Sed cupiditate repudiandae aut qui impedit est quo illum.',
    //   price: 39.3,
    //   quantity: 84,
    //   stars: 1,
    // });

    // const carroll = await Product.create({
    //   name: 'Carroll',
    //   description:
    //     'Porro voluptatem dolorum voluptatem maxime libero commodi consectetur. Beatae ut natus tenetur quidem hic suscipit. Ut et quidem in ut tenetur veniam. Quaerat et necessitatibus reprehenderit officiis.',
    //   price: 12.5,
    //   quantity: 24,
    //   stars: 3,
    // });

    // const jakubowski = await Product.create({
    //   name: 'Jakubowski',
    //   description:
    //     'Sit ut aut nisi quas et autem dolorem eveniet in. Voluptas quo enim numquam voluptate. Sed sequi beatae et modi beatae aspernatur eligendi quo mollitia. Vel tempore minus tenetur impedit voluptas laborum est. Dolore eum qui officia aliquam perferendis assumenda.',
    //   price: 60.0,
    //   quantity: 73,
    //   stars: 3,
    // });

    // const bergnaum = await Product.create({
    //   name: 'Bergnaum',
    //   description:
    //     'Id maxime consectetur omnis cumque et vel repudiandae. Illum nihil dolorem perspiciatis alias. Ut ducimus quam veritatis possimus et in sequi ipsum. Maiores quos tempora necessitatibus sapiente nihil.',
    //   price: 80.4,
    //   quantity: 60,
    //   stars: 3,
    // });

    // const carter = await Product.create({
    //   name: 'Carter',
    //   description:
    //     'Reiciendis quis laboriosam quod doloribus. Eius nulla voluptatem. Qui deleniti est asperiores beatae voluptates quam et eos. Libero praesentium quasi unde eius occaecati sit voluptate. Sed quia et. Et ut sed.',
    //   price: 54.3,
    //   quantity: 1,
    //   stars: 3,
    // });

    // const harris = await Product.create({
    //   name: 'Harris',
    //   description:
    //     'Qui quo in quo nostrum repellat laudantium maiores. Molestiae et at et voluptas harum et saepe magnam beatae. Dolorem praesentium aut saepe. Porro hic maxime porro. Illum sunt non cupiditate aliquid.',
    //   price: 70.0,
    //   quantity: 11,
    //   stars: 2,
    // });

    // const melba = await Product.create({
    //   name: 'Melba',
    //   description:
    //     'Sint sint et laborum et cupiditate. Eaque veritatis ex nostrum est expedita illo. Rerum id nisi quibusdam vel aut deserunt consequatur ut harum.',
    //   price: 92.9,
    //   quantity: 4,
    //   stars: 1,
    // });

    // const maggio = await Product.create({
    //   name: 'Maggio',
    //   description:
    //     'Nobis fugit et. Dolorem libero architecto doloribus ut nisi. Et error corporis quia odio dolores aut.',
    //   price: 28.3,
    //   quantity: 32,
    //   stars: 2,
    // });

    // const skiles = await Product.create({
    //   name: 'Skiles',
    //   description:
    //     'Ullam est sed aliquid. Laborum eaque est ex et quibusdam eaque voluptatibus explicabo voluptas. Et est nihil dignissimos. Magnam perferendis voluptatem aut rem repellat qui ea.',
    //   price: 50.2,
    //   quantity: 20,
    //   stars: 1,
    // });

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
      username: 'tia',
      password: '1234',
      name: 'Tia',
      email: 't@gmail.com',
      isAdmin: true,
    });

    const user3 = await User.create({
      username: 'sonja',
      password: '1234',
      name: 'Sonja',
      email: 's@gmail.com',
      isAdmin: false,
    });
    const user4 = await User.create({
      username: 'victoria',
      password: '1234',
      name: 'Victoria',
      email: 'v@gmail.com',
      isAdmin: false,
    });
    //-------------------------------------------------------------------

    //Cart Instances
    const cart1 = await Cart.create({
      orderStatus: 'UNPAID',
      totalQty: 5,
      totalPrice: 10.0,
    });

    const cart2 = await Cart.create({
      orderStatus: 'UNPAID',
      totalQty: 2,
      totalPrice: 5.0,
    });

    const cart3 = await Cart.create({
      orderStatus: 'UNPAID',
      totalQty: 3,
      totalPrice: 15.0,
    });

    const cart4 = await Cart.create({
      orderStatus: 'UNPAID',
      totalQty: 5,
      totalPrice: 17.0,
    });

    //Note: I removed all set products to cart because I wanted to check my backend add to cart routes were working via Postman instead. However, for testing purposes, feel free to add await and set your products here*.

    await user1.addCart(cart1);
    await user2.addCart(cart2);
    // await coffee1.addCart(cart1);
    // await coffee2.addCart(cart1);
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

//Notes from Seeding DB
//Setting User to Cart
//  await user1.addCart(cart1);
//  await user2.addCart(cart2);
//  await user4.addCart(cart4)

//Setting Products to Cart
//---> 3 Products in Cart1, associated to user1 (Brandy)
//  await coffee2.addCart(cart1);
//  const updatedQuantity = await Cart_Product.update(
//    { quantity: 2 },
//    {
//      where: {
//        productId: coffee2.id,
//        cartId: cart1.id,
//      },
//    }
//  );
// await coffee1.addCart(cart1);
// --> 1 Product in Cart2, associated with User 2 (Tia)
//  await coffee3.addCart(cart2);
//  await coffee1.addCart(cart2);

//--> Adding Products to Cart?
//  await cart2.addProduct(coffee1)

//cart4 check
//  await coffee2.addCart(cart4);
//  await coffee1.addCart(cart4);
//  await coffee3.addCart(cart4);

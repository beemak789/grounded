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
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgfmph79pQPhUhoJHAVJWJCSgBorACCB5fJzbpHyflhZpQB6Mb5cv4YCAIEaFtTx2wdHCghn8a5etDav9B5gGaTrwu0_vi&usqp=CAE',
      price: 2599,
      stars: 4.0,
    });

    const coffee2 = await Product.create({
      name: 'Cult Classic',
      description:
        'Small batch roasted coffee that has a cult following stronger than qAnon. This blend has a strong but clean taste with no trace of bitterness. The organic beans are sourced from rain forests in Columbia, Guatemala and Sumatra.',
      inventoryQuantity: 5,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfb4pjxEkqRs5KRSobyiKKAYSMxToSvX14yPEeLFA-WFMyDMaPfe9VZpVd9eEQAdNIgx2RGfjgAAiQgA5qC4RKBK7Hbc_zWP9Uplrg6e7phVV8ijkIjoz4&usqp=CAE',
      price: 2999,
      stars: 4.5,
    });

    const coffee3 = await Product.create({
      name: 'Latte Larrys',
      description:
        'Feeling like you want some excitement?  Turn to these peaberry coffee beans that offer a tarty blend of acidity and sweetness guaranteed to wake you up and put a mischevious smile on your face.',
      inventoryQuantity: 0,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScqm-fEo1JcQtZ-35pyKEDDaQkulwrJNnn2Y7tUsRsrkdBgNL9oAifdrVG0VwKF5jeL_e6jyfvO7QEe84FpMzCOYzwh08HsflRKSxB-UbSFF8f--xW9tsQ&usqp=CAE',
      price: 2799,
      stars: 4.0,
    });

    const coffee4 = await Product.create({
      name: 'Cherry on Top',
      description:
        'Handcrafted organic blend from Typica and Caturra. Each cup will taste of sweet cherries.',
      inventoryQuantity: 3,
      imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvo-g3hPlXraTEXaYcWFtmIfAcm-qp3--_BdSOJVyySTQNvUjxs41bJt7fd9swWAq3TcuZJSM--aJnVR6TD2ArSei3uumOxcfNE6vgKSIQT_yC32KdHpXC&usqp=CAE",
      price: 2799,
      stars: 3.5,
    });

    const coffee5 = await Product.create({
      name: 'Feeling Lucky',
      description:
        'This bold and dark roast has the sweetness of a medium roast and the unique attributes of peaberry. The blend includes ethically sourced organic beans from Colombia, Hondura and Ethiopia.',
      inventoryQuantity: 100,
      imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlqletA0xRLbet-TNTRJz3Gxh6buqqQPJf3FB3HAQk_BBbeogTae9qIB1ynl3rKkMulHvL_fh44-wtSwyuJrQNO_o89c0S06pPYOPEo5scadS02ttzbsfRPDM&usqp=CAE",
      price: 2999,
      stars: 3.5,
    });

    const justPeachy = await Product.create({
      name: 'Just Peachy',
      description:
        'This 100% free trade Brazilian Arabica blends deep notes of peaches with a smooth and creamy finish.',
      inventoryQuantity: 10,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPanFHms4lJNTzO-XQidxFB_9lsbbxqw8QfStDWb-o4cKYr2PDeRFIm_AXpBwarM72ZUpp0mt9wlcJ15MRx7-GgSTy9iVQ2Fg8973d68qvGTFQfcIk2wLhGg&usqp=CAE',
      price: 2799,
      stars: 4.0,
    });

    const roseColored = await Product.create({
      name: 'Rose Colored Glasses',
      description:
        'Free trade and gluten free Hondouran beans which result in a swirl of vanilla, caramel and roses. Smooth and creamy, this light roast can get you through any week.',
      inventoryQuantity: 20,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjKLZn8VUZKKbt2-xnOCCxqwJtw7Uuj4T7q8Y6NSg0Lom0adLe_NivDF1t_yhm_ORZNhtPv7cxtJJiPm0CKD9iAMxGqGZHpMnqKw9toOxUmdbwlScf42hP&usqp=CAE',
      price: 2599,
      stars: 4.5,
    });

    const insomnia = await Product.create({
      name: 'Insomnia',
      description:
        'Free trade and organic blend of the strongest beans that we could find. Actual beans are a secret. However, this dark roast is creamy and deep. Tastes like hazenut vanilla with a hint of cinnamon.',
      inventoryQuantity: 200,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRry4straAuII_Qvjflzvf7DUurZqS5IzDxqUMsenWRbinyfSgMbdjSLhlYLJJe-K4KQld7gpl1ejnmmGXgk8Ypw63PFvBHl3-WktY3UH-vfZQk0KtjIN8F&usqp=CAE',
      price: 4999,
      stars: 4.5,
    });

    const beLatte = await Product.create({
      name: 'I will be latte',
      description:
        'Some days you just want to take your time and that is fine.  Pour yourself a cup of this delicious Kopi luwak coffee from Indonesia.',
      inventoryQuantity: 25,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJTf9oKaKksn32egPVyogaJ5eJcTGvDJ051A110rajvlr4AqvoMd7aPAOSArenwkAP96_kY047mTQLdNcokL0MOV5jCyh2ja0NytEO_Is59rJzT0cQcWA3gg&usqp=CAE',
      price: 5799,
      stars: 5.0,
    });

    const beFine = await Product.create({
      name: 'It will be fine',
      description:
        'Chocolate makes everything okay. This blend of honduran dark roast throws you into chocolate heaven.',
      inventoryQuantity: 200,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR364SRWifpLMELNygVCbreDGZXUN5dsCptf7WNNu71zphBQ5s_gY8At4d-gWemLq6AITH3ZMGPA1b4G37K_dtfNCyDoXtQZ-mFVGwAmqLTMOt8KYqdxNnG4Q&usqp=CAE',
      price: 2799,
      stars: 4.0,
    });

    const isGrind = await Product.create({
      name: "It's a Grind",
      description:
        'A complex coffee with an exotic and syrupy body with hints of chocolate, vanilla and spice. Does well as a light roast and dark roast.',
      inventoryQuantity: 60,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJBTiW-N_9b-MJyspPpHCrIv0F5H1zzGhRTufSqTE1ulyrbqLguIUFDYbK6nC91IC0zhT4OQJzt3pFcfnmw-HzOAXreMMza0XCE_fRy9mYR6P0MG5qrtrH&usqp=CAE',
      price: 3999,
      stars: 3,
    });

    const whipped = await Product.create({
      name: 'Whipped',
      description:
        'The trademark “Whipped” removes caffeine from coffee without the use of solvents or chemicals. This coffee is characterized by delicate sweetness, gentle acidity and round flavor and suitable for roasting and brewing as either an espresso or drip brew.',
      inventoryQuantity: 10,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0yxh8VpgJwYvXc3BAgrGHqF5J8CGr1_vTc-2NIdSU1cI-ZOirnUNuOmC1aRmIe5nP9LaXouacY_KY7gofKRX9FB5HO24JSj3-OeBH4tMofjV5GHE22QUm0g&usqp=CAE',
      price: 1499,
      stars: 4.5,
    });

    const dejabrew = await Product.create({
      name: 'Deja Brew',
      description:
        'An enticing aroma of floral and spice greets the nose. This pleasing cup possesses a sweet and rounded taste along with a delicate acidity and medium body characteristic of coffee blended from South American origins.',
      inventoryQuantity: 200,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHyPjOOvoeD8uEZNjEVx2ZGGq-RfpkeY4Ack0CRpIjhRf8Cb3VVKqrosv6kfFLfBvXPJrpknpxYKdaznH9Q8B6c-gKWRTiu2r94X4lY_mWbbWS86Xizhlp&usqp=CAE',
      price: 1499,
      stars: 4.5,
    });

    const revival = await Product.create({
      name: 'Revival',
      description:
        'A soaring lightness and lovely balance of sweet and dry tones distinguishes this Costa Rican coffee. This is the coffee equivalent of a fine Beaujolais, with its dry, bright tones and delicate sweetness. Its clean, crisp character will please coffee lovers.',
      inventoryQuantity: 35,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsiYhELGO964lsBmQVZP3it91gQjuEFB9ILdvgoG-g_VfC80hRNERoyVzzCZNYoNI5fvCOV0js9Utvwlqfq94biPyuYwLIKO0JMcHa4uqRZN_sotJf_rYgIw&usqp=CAE',
      price: 3599,
      stars: 3.5,
    });

    const jivajitters = await Product.create({
      name: 'Java Jitters',
      description:
        'Another of the classic Ethiopian coffee regions, Sidamo coffees are known for medium body, delicate fruits, spice, and citrus. Our FTO Natural Sidamo fits the bill.',
      inventoryQuantity: 35,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBUGtN3WoQBnyU9fpd2a9xNJWIbTI7a9DPtAswdC9F65Qi2lMEJIx6hBmorxFFdglxnOxtgaDfd7DsYa43lXPVa1ZTavl-3Bcmt_ByH1g1Sg7o6l0Mb6zi&usqp=CAE',
      price: 4599,
      stars: 3.5,
    });

    const mochaMadness = await Product.create({
      name: 'Mocha Madness',
      description:
        'A striking combination of nutty, chocolaty aromas greet the expectant nose. Careful blending of coffees from Indonesia and Central America creates an exceptionally well balanced taste providing a bright, yet deep-toned acidity with a delicate sweetness. An exceptional cup of coffee!',
      price: 1099,
      inventoryQuantity: 35,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0779/9179/products/12oz_right_espresso_1188x1368_ea097999-c09a-4930-8ef0-32c2b90b609a_x390.png?v=1602703524',
      stars: 2.5,
    });

    const beanThere = await Product.create({
      name: 'Bean There, Done That',
      description:
        'This region’s rich volcanic soil and cool weather provide the perfect conditions to produce one of the world’s best coffees.  It offers an exquisite roundness and pleasant mouth-feel, which can satisfy the most demanding palates.',
      price: 3599,
      inventoryQuantity: 250,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkluaT_oIfBkc8UsSU2xiu85hpPiOsHsJRHs_iFGz4utxWwA_6G1HiS36iNbLNXvcD8MagxIMbcBuYu2QhqYGBvRuEhOu4qkxgeuTInJhWu0HEpplxOYNjd5A&usqp=CAE',
      stars: 3,
    });

    const brewedAwake = await Product.create({
      name: 'Cold Brewed Awakening',
      description:
        'Aromatic hints of spice and caramel with flavor notes of berries and citrus. Full bodies with honeyed sweetness.',
      price: 1899,
      inventoryQuantity: 250,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQILnDINuRD2xG00hjccwWaMSqpxLi0-8KxoGLXKfAJi-9_1bT9xnJ0FWvOhz32FhepaI_igbnZGEXTjJ662-hRFIPbSx1YsEXww8c_GJrsttMC-vgTvQQssQ&usqp=CAE',
      stars: 3,
    });

    const awake = await Product.create({
      name: 'Awake and Afraid',
      description:
        'At their best, Peru coffees are delicately sweet, round, and gentle acidity. This Peru is delicately sweet, fragrant, delicate yet rich, with a discreet but vibrant acidity. Makes a fine single origin espresso in the classic northern Italian style.',
      price: 1899,
      inventoryQuantity: 90,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZUBFCiflSBA0RcmVCwEPGSeNXP0cmcsLWZnIL4Jr13HiOfZPIJHbNOAf7VLCAqaf6YCZhbplJEwOl1ewJvseqbm1YvfgeiUt4JI0xbpDMsYgvgkOu4gyv&usqp=CAE',
      stars: 4.5,
    });

    const truly = await Product.create({
      name: 'Truly Espresso’d',
      description:
        'A cosmopolitan blend that combines coffees from Latin America, the Pacific, and east Africa. Fruit and chocolate-toned aromatics shimmer over robust, slightly earthy bottom tones. Edgy yet elegant.',
      price: 2599,
      inventoryQuantity: 200,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCJapvONY89eX8pfdabJEi6DkpvdQ_AA-BZJ70MtCvgKrJfJrzOKmkbfMy_VAOpeQJl6-nAs1qE9Au4ky1AqBdZejX7QqhLjq4ybAuba2QKVSeEdC-2H7u9g&usqp=CAE',
      stars: 4.5,
    });

    const grace = await Product.create({
      name: 'Grace Blend',
      description:
        'A smooth light roast with tones of trailblazing and inspiring programming design.',
      price: 2000,
      inventoryQuantity: 20,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8wzUIO5sAD4NlcHVE-Bt7fWFZ1Hm2I56hXEa-otYa8YqpSu1O3n0-IYxwkBkSUol197MM-Cc41wU-yMV66ZHlS2vt5sXp434HsZ2Ck4w&usqp=CAE',
      stars: 4.8,
    });

    const hopped = await Product.create({
      name: 'Au Hopped Up',
      description: 'A zangy medium roast that will keep you coding for hours.',
      price: 2400,
      inventoryQuantity: 150,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7OpTfn3N8PZRVQT52yOdXVnTtbjAiGNRYLwnTrMrpYiJT4jXO24tik9O37mvP2cGXwSJnSpDNQSzJlE0_uMeIg9N_4WoDIzSEaCcDDQqwJceGKWc0GTIy&usqp=CAE',
      stars: 4.7,
    });

    const theGrind = await Product.create({
      name: 'The Grind',
      description:
        'A solid dark roast for the days you just need to get things done.',
      price: 2100,
      inventoryQuantity: 100,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1yyUmmYQ9wQeA9BzUm6vUEvFifJb5pUaHfpbUjdOtyTotYK4x0dcGSqZUw1MwXaPbKEaPAiApXVNvqU-uIFsY697AiUh2idHIEp7kAEwhsUn3vI2fjOTE&usqp=CAE',
      stars: 4.5,
    });

    const breakthrough = await Product.create({
      name: 'Breakthrough',
      description: 'A medium blend to accompany all your aha moments in life',
      price: 2200,
      inventoryQuantity: 150,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3TIMLmxmFSCovL-4cmaOhRC6vFtcI6jw8vBO09HkbEsiOo7ozCdrU9-Qp2ACb1PzaMEV7ztpd-l9zf_KXkO29LClpxVERRA&usqp=CAE',
      stars: 4.8,
    });

    const asyncAl = await Product.create({
      name: 'Async Allegory',
      description:
        'A hardcore blend for those nonsyncronous nights with a single throughline.',
      price: 2100,
      inventoryQuantity: 60,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsfLtLXvq_H3h52I1_ehnNncG3OsHkKs5gGe86ypS4W7NCvA6yFAgm6XT95Qa2WnZa15kkGEGBhdzb5JtfhYimqoH-MMwAI57T34mj89Hs&usqp=CAE',
      stars: 4.5,
    });

    const recursion = await Product.create({
      name: 'Recursion',
      description:
        'A complex blend with almost circular tones— this blend will leave your head spinning!',
      price: 2000,
      inventoryQuantity: 29,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSykWEvJa7mehJqWivl6XOFvPDojNDuzBbNp8j6k1KWj5pyoQTeqtR8o13ysWJzaers3qhpTF5Wbp803T-3Y_LwUncqj4yWp5Vbbixhj7lQBvXbdFd73EloNw&usqp=CAE',
      stars: 4.1,
    });

    const boolean = await Product.create({
      name: 'Boolean Blend',
      description: 'This blend will put you in a decisive true or false mood.',
      price: 2200,
      inventoryQuantity: 86,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKD4PRi3cJzlCWXoOsHEZeXBJ3VFuqeIQSuSqcaBclvEiSCqDM6gw1WZPUxxJVivxc8zBkEVC7-zP0VVfK87KhqxnoHsyh6u-X4_43MSibPY_radbDMRHJZQ&usqp=CAE',
      stars: 4.6,
    });

    const fullstack = await Product.create({
      name: 'Fullstack Flavor Bomb',
      description: 'A top-ranked blend for those early bootcamp mornings.',
      price: 2100,
      inventoryQuantity: 20,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpGHxlQunuNxKxFFSEfAlIvg-gENx8_qM1vwenOIqC4wCujAYbDHh1_a8ePVbFAP9RymkZ24n7eltmABGLzw9OOLS9oqZSsRFehH3ucD0&usqp=CAE',
      stars: 4.9,
    });

    const ifElse = await Product.create({
      name: `If Else`,
      description:
        'If you drink this blend, good things will happen. Else, watch out!',
      price: 2400,
      inventoryQuantity: 200,
      imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkOt7ftczvMfELyCKj_Yzl6tl1s4wCZvdcPmgBuyJGHZta3GEA4lSsZ-xlbY9gx5BUBwqHw0_60HpyNrYPhAkuyelAb4BMb7bwXYLAcXOX57g4bAezjj4r&usqp=CAE",
      stars: 4.8,
    });

    const gitGoing = await Product.create({
      name: 'Git Going',
      description: `An early morning light roast blend to give you energy to get your day started!`,
      price: 2300,
      inventoryQuantity: 120,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNqK9b6J8aiwUh7zQUyqeSNM6V7nXdYdFNPqG6tPnEClN9ysC2j7CA3MbUNqsw5CgYlpi0GbQQGJQiws3sb9_aS_05n5pEAexz_ARUjDEnINuDnfoGIxX9&usqp=CAE',
      stars: 4.4,
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

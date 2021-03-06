const coffees = [
  {
    name: "It's a Grind",
    description: "A complex coffee with an exotic and syrupy body with hints of chocolate, vanilla and spice. Does well as a light roast and dark roast.",
    price: 39.99,
    quantity: 300,
    stars: 3
  },
  {
    name: "Whipped",
    description: "The trademark “Whipped” removes caffeine from coffee without the use of solvents or chemicals. This coffee is characterized by delicate sweetness, gentle acidity and round flavor and suitable for roasting and brewing as either an espresso or drip brew.",
    price: 14.99,
    quantity: 200,
    stars: 4.5
  },
  {
    name: "Deja Brew",
    description: "An enticing aroma of floral and spice greets the nose. This pleasing cup possesses a sweet and rounded taste along with a delicate acidity and medium body characteristic of coffee blended from South American origins.",
    price: 14.99,
    quantity: 200,
    stars: 4.5
  },
  {
    name: "Revival",
    description: "A soaring lightness and lovely balance of sweet and dry tones distinguishes this Costa Rican coffee. This is the coffee equivalent of a fine Beaujolais, with its dry, bright tones and delicate sweetness. Its clean, crisp character will please coffee lovers.",
    price: 35.99,
    quantity: 100,
    stars: 3.5
  },
  {
    name: "Java Jitters",
    description: "Another of the classic Ethiopian coffee regions, Sidamo coffees are known for medium body, delicate fruits, spice, and citrus. Our FTO Natural Sidamo fits the bill.",
    price: 45.99,
    quantity: 100,
    stars: 3.5
  },
  {
    name: "Mocha Madness",
    description: "A striking combination of nutty, chocolaty aromas greet the expectant nose. Careful blending of coffees from Indonesia and Central America creates an exceptionally well balanced taste providing a bright, yet deep-toned acidity with a delicate sweetness. An exceptional cup of coffee!",
    price: 10.99,
    quantity: 100,
    stars: 2.5
  },
  {
    name: "Bean There, Done That",
    description: "This region’s rich volcanic soil and cool weather provide the perfect conditions to produce one of the world’s best coffees.  It offers an exquisite roundness and pleasant mouth-feel, which can satisfy the most demanding palates.",
    price: 35.99,
    quantity: 250,
    stars: 3
  },
  {
    name: "Brewed Awakening",
    description: "Aromatic hints of spice and caramel with flavor notes of berries and citrus. Full bodies with honeyed sweetness.",
    price: 18.99,
    quantity: 250,
    stars: 3
  },
  {
    name: "Awake and Afraid",
    description: "At their best, Peru coffees are delicately sweet, round, and gentle acidity. This Peru is delicately sweet, fragrant, delicate yet rich, with a discreet but vibrant acidity. Makes a fine single origin espresso in the classic northern Italian style.",
    price: 18.99,
    quantity: 90,
    stars: 4.5
  },
  {
    name: "Truly Espresso’d",
    description: "A cosmopolitan blend that combines coffees from Latin America, the Pacific, and east Africa. Fruit and chocolate-toned aromatics shimmer over robust, slightly earthy bottom tones. Edgy yet elegant.",
    price: 25.99,
    quantity: 200,
    stars: 4.5
  },
]




//Additional Coffee from seed.js
// const coffee4 = await Product.create({
//   name: 'Cherry on Top',
//   description:
//     'Handcrafted organic blend from Typica and Caturra. Each cup will taste of sweet cherries.',
//   quantity: 3,
//   price: 27.99,
//   stars: 3.5,
// });

// const coffee5 = await Product.create({
//   name: 'Feeling Lucky',
//   description:
//     'This bold and dark roast has the sweetness of a medium roast and the unique attributes of peaberry. The blend includes ethically sourced organic beans from Colombia, Hondura and Ethiopia.',
//   quantity: 0,
//   price: 29.99,
//   stars: 3.5,
// });

    // const justPeachy = await Product.create({
    //   name: "Just Peachy",
    //   description:
    //     "This 100% free trade Brazilian Arabica blends deep notes of peaches with a smooth and creamy finish.",
    //   price: 27.99,
    //   stars: 4.0,
    // });

    // const roseColored = await Product.create({
    //   name: "Rose Colored Glasses",
    //   description:
    //     "Free trade and gluten free Hondouran beans which result in a swirl of vanilla, caramel and roses. Smooth and creamy, this light roast can get you through any week.",
    //   price: 25.99,
    //   stars: 4.5,
    // });

    // const insomnia = await Product.create({
    //   name: "Insomnia",
    //   description:
    //     "Free trade and organic blend of the strongest beans that we could find. Actual beans are a secret. However, this dark roast is creamy and deep. Tastes like hazenut vanilla with a hint of cinnamon.",
    //   price: 49.99,
    //   stars: 4.5,
    // });

    // const beLatte = await Product.create({
    //   name: "I will be latte",
    //   description:
    //     "Some days you just want to take your time and that is fine.  Pour yourself a cup of this delicious Kopi luwak coffee from Indonesia.",
    //   price: 57.99,
    //   stars: 5.0,
    // });

    // const beFine = await Product.create({
    //   name: "It will be fine",
    //   description:
    //     "Chocolate makes everything okay. This blend of honduran dark roast throws you into chocolate heaven.",
    //   price: 27.99,
    //   stars: 4.0,
    // });

    // const isGrind = await Product.create({
    //   name: "It's a Grind",
    //   description:
    //     "A complex coffee with an exotic and syrupy body with hints of chocolate, vanilla and spice. Does well as a light roast and dark roast.",
    //   price: 39.99,
    //   quantity: 300,
    //   stars: 3,
    // });

    // const whipped = await Product.create({
    //   name: "Whipped",
    //   description:
    //     "The trademark “Whipped” removes caffeine from coffee without the use of solvents or chemicals. This coffee is characterized by delicate sweetness, gentle acidity and round flavor and suitable for roasting and brewing as either an espresso or drip brew.",
    //   price: 14.99,
    //   quantity: 200,
    //   stars: 4.5,
    // });

    // const dejabrew = await Product.create({
    //   name: "Deja Brew",
    //   description:
    //     "An enticing aroma of floral and spice greets the nose. This pleasing cup possesses a sweet and rounded taste along with a delicate acidity and medium body characteristic of coffee blended from South American origins.",
    //   price: 14.99,
    //   quantity: 200,
    //   stars: 4.5,
    // });

    // const revival = await Product.create({
    //   name: "Revival",
    //   description:
    //     "A soaring lightness and lovely balance of sweet and dry tones distinguishes this Costa Rican coffee. This is the coffee equivalent of a fine Beaujolais, with its dry, bright tones and delicate sweetness. Its clean, crisp character will please coffee lovers.",
    //   price: 35.99,
    //   quantity: 100,
    //   stars: 3.5,
    // });

    // const jivajitters = await Product.create({
    //   name: "Java Jitters",
    //   description:
    //     "Another of the classic Ethiopian coffee regions, Sidamo coffees are known for medium body, delicate fruits, spice, and citrus. Our FTO Natural Sidamo fits the bill.",
    //   price: 45.99,
    //   quantity: 100,
    //   stars: 3.5,
    // });

    // const mochaMadness = await Product.create({
    //   name: "Mocha Madness",
    //   description:
    //     "A striking combination of nutty, chocolaty aromas greet the expectant nose. Careful blending of coffees from Indonesia and Central America creates an exceptionally well balanced taste providing a bright, yet deep-toned acidity with a delicate sweetness. An exceptional cup of coffee!",
    //   price: 10.99,
    //   quantity: 100,
    //   stars: 2.5,
    // });

    // const beanThere = await Product.create({
    //   name: "Bean There, Done That",
    //   description:
    //     "This region’s rich volcanic soil and cool weather provide the perfect conditions to produce one of the world’s best coffees.  It offers an exquisite roundness and pleasant mouth-feel, which can satisfy the most demanding palates.",
    //   price: 35.99,
    //   quantity: 250,
    //   stars: 3,
    // });

    // const brewedAwake = await Product.create({
    //   name: "Brewed Awakening",
    //   description:
    //     "Aromatic hints of spice and caramel with flavor notes of berries and citrus. Full bodies with honeyed sweetness.",
    //   price: 18.99,
    //   quantity: 250,
    //   stars: 3,
    // });

    // const awake = await Product.create({
    //   name: "Awake and Afraid",
    //   description:
    //     "At their best, Peru coffees are delicately sweet, round, and gentle acidity. This Peru is delicately sweet, fragrant, delicate yet rich, with a discreet but vibrant acidity. Makes a fine single origin espresso in the classic northern Italian style.",
    //   price: 18.99,
    //   quantity: 90,
    //   stars: 4.5,
    // });

    // const truly = await Product.create({
    //   name: "Truly Espresso’d",
    //   description:
    //     "A cosmopolitan blend that combines coffees from Latin America, the Pacific, and east Africa. Fruit and chocolate-toned aromatics shimmer over robust, slightly earthy bottom tones. Edgy yet elegant.",
    //   price: 25.99,
    //   quantity: 200,
    //   stars: 4.5,
    // });

    // const grace = await Product.create({
    //   name: "Grace Blend",
    //   description:
    //     "A smooth light roast with tones of trailblazing and inspiring programming design.",
    //   price: 20.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.8,
    // });

    // const hopped = await Product.create({
    //   name: "Au Hopped Up",
    //   description: "A zangy medium roast that will keep you coding for hours.",
    //   price: 24.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.7,
    // });

    // const theGrind = await Product.create({
    //   name: "The Grind",
    //   description:
    //     "A solid dark roast for the days you just need to get things done.",
    //   price: 21.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.5,
    // });

    // const breakthrough = await Product.create({
    //   name: "Breakthrough",
    //   description: "A medium blend to accompany all your aha moments in life",
    //   price: 22.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.8,
    // });

    // const asyncAl = await Product.create({
    //   name: "Async Allegory",
    //   description:
    //     "A hardcore blend for those nonsyncronous nights with a single throughline.",
    //   price: 21.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.5,
    // });

    // const recursion = await Product.create({
    //   name: "Recursion",
    //   description:
    //     "A complex blend with almost circular tones— this blend will leave your head spinning!",
    //   price: 20.0,
    //   quantity: 21,
    //   imageUrl: null,
    //   stars: 4.1,
    // });

    // const boolean = await Product.create({
    //   name: "Boolean Blend",
    //   description: "This blend will put you in a decisive true or false mood.",
    //   price: 22.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.6,
    // });

    // const fullstack = await Product.create({
    //   name: "Fullstack Flavor Bomb",
    //   description: "A top-ranked blend for those early bootcamp mornings.",
    //   price: 21.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.9,
    // });

    // const ifElse = await Product.create({
    //   name: `If/else`,
    //   description:
    //     "If you drink this blend, good things will happen. Else, watch out!",
    //   price: 24.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.8,
    // });

    // const gitGoing = await Product.create({
    //   name: "Git Going",
    //   description: `An early morning light roast blend to give you energy to get your day started!`,
    //   price: 23.0,
    //   quantity: 20,
    //   imageUrl: null,
    //   stars: 4.4,
    // });

    // const zemlak = await Product.create({
    //   name: "Zemlak",
    //   description:
    //     "Impedit earum porro eos sequi velit molestias facere. Ullam est harum repellat saepe et totam explicabo eum labore. Occaecati impedit eum. Voluptates officiis sit in quibusdam molestiae deserunt dicta velit ex. Quas adipisci iure.",
    //   price: 22.2,
    //   quantity: 96,
    //   stars: 1,
    // });

    // const harvey = await Product.create({
    //   name: "Harvey",
    //   description:
    //     "Cumque possimus unde vero dolorum maxime in sunt. Rerum nesciunt qui. Officiis hic in ducimus natus vel eum.",
    //   price: 35.2,
    //   quantity: 12,
    //   stars: 5,
    // });

    // const glover = await Product.create({
    //   name: "Glover",
    //   description:
    //     "Tenetur ipsum eligendi voluptates voluptatem architecto laboriosam totam est. A sed occaecati est. In enim rerum nobis quibusdam accusamus doloremque rerum deleniti.",
    //   price: 55.8,
    //   quantity: 80,
    //   stars: 4,
    // });

    // const nicolas = await Product.create({
    //   name: "Nicolas",
    //   description:
    //     "Quod labore est. Dolorum porro rem et. Libero voluptatem quidem harum ut.",
    //   price: 49.9,
    //   quantity: 73,
    //   stars: 4,
    // });

    // const yolanda = await Product.create({
    //   name: "Yolanda",
    //   description:
    //     "Odio eos aut consectetur eaque. Culpa et excepturi. Ullam quam voluptas porro et sit reiciendis vero vel. Et atque unde amet tempora quia.",
    //   price: 69.4,
    //   quantity: 2,
    //   stars: 2,
    // });

    // const erdman = await Product.create({
    //   name: "Erdman",
    //   description:
    //     "Qui sit repudiandae earum. Laboriosam sit et perspiciatis recusandae molestiae exercitationem molestiae ratione ut. Incidunt iste sint eum. Nihil molestias laborum placeat id. Suscipit non dolorum maxime veniam iste.",
    //   price: 97.0,
    //   quantity: 33,
    //   stars: 4,
    // });

    // const cole = await Product.create({
    //   name: "Cole",
    //   description:
    //     "Repellat ut enim magnam possimus amet reiciendis doloremque et nihil. Quia explicabo ullam id iste sunt laudantium pariatur sint. Aspernatur est corporis iste et incidunt consequatur maiores. Pariatur inventore est sit laborum natus. Eligendi dolorem cum hic dolorem corrupti. Voluptates vero corporis cum soluta.",
    //   price: 86.7,
    //   quantity: 89,
    //   stars: 4,
    // });

    // const sheila = await Product.create({
    //   name: "Sheila",
    //   description:
    //     "Rem commodi et soluta at inventore exercitationem quia. Dignissimos sed quis illum perspiciatis. Totam beatae molestiae iste fugit sed fuga dolorem placeat explicabo. Qui dolorem dolor veniam sequi odit qui. Sed cupiditate repudiandae aut qui impedit est quo illum.",
    //   price: 39.3,
    //   quantity: 84,
    //   stars: 1,
    // });

    // const carroll = await Product.create({
    //   name: "Carroll",
    //   description:
    //     "Porro voluptatem dolorum voluptatem maxime libero commodi consectetur. Beatae ut natus tenetur quidem hic suscipit. Ut et quidem in ut tenetur veniam. Quaerat et necessitatibus reprehenderit officiis.",
    //   price: 12.5,
    //   quantity: 24,
    //   stars: 3,
    // });

    // const jakubowski = await Product.create({
    //   name: "Jakubowski",
    //   description:
    //     "Sit ut aut nisi quas et autem dolorem eveniet in. Voluptas quo enim numquam voluptate. Sed sequi beatae et modi beatae aspernatur eligendi quo mollitia. Vel tempore minus tenetur impedit voluptas laborum est. Dolore eum qui officia aliquam perferendis assumenda.",
    //   price: 60.0,
    //   quantity: 73,
    //   stars: 3,
    // });

    // const bergnaum = await Product.create({
    //   name: "Bergnaum",
    //   description:
    //     "Id maxime consectetur omnis cumque et vel repudiandae. Illum nihil dolorem perspiciatis alias. Ut ducimus quam veritatis possimus et in sequi ipsum. Maiores quos tempora necessitatibus sapiente nihil.",
    //   price: 80.4,
    //   quantity: 60,
    //   stars: 3,
    // });

    // const carter = await Product.create({
    //   name: "Carter",
    //   description:
    //     "Reiciendis quis laboriosam quod doloribus. Eius nulla voluptatem. Qui deleniti est asperiores beatae voluptates quam et eos. Libero praesentium quasi unde eius occaecati sit voluptate. Sed quia et. Et ut sed.",
    //   price: 54.3,
    //   quantity: 1,
    //   stars: 3,
    // });

    // const harris = await Product.create({
    //   name: "Harris",
    //   description:
    //     "Qui quo in quo nostrum repellat laudantium maiores. Molestiae et at et voluptas harum et saepe magnam beatae. Dolorem praesentium aut saepe. Porro hic maxime porro. Illum sunt non cupiditate aliquid.",
    //   price: 70.0,
    //   quantity: 11,
    //   stars: 2,
    // });

    // const melba = await Product.create({
    //   name: "Melba",
    //   description:
    //     "Sint sint et laborum et cupiditate. Eaque veritatis ex nostrum est expedita illo. Rerum id nisi quibusdam vel aut deserunt consequatur ut harum.",
    //   price: 92.9,
    //   quantity: 4,
    //   stars: 1,
    // });

    // const maggio = await Product.create({
    //   name: "Maggio",
    //   description:
    //     "Nobis fugit et. Dolorem libero architecto doloribus ut nisi. Et error corporis quia odio dolores aut.",
    //   price: 28.3,
    //   quantity: 32,
    //   stars: 2,
    // });

    // const skiles = await Product.create({
    //   name: "Skiles",
    //   description:
    //     "Ullam est sed aliquid. Laborum eaque est ex et quibusdam eaque voluptatibus explicabo voluptas. Et est nihil dignissimos. Magnam perferendis voluptatem aut rem repellat qui ea.",
    //   price: 50.2,
    //   quantity: 20,
    //   stars: 1,
    // });


    //Brandy's Created Users for Testing
    const user3 = await User.create({
      username: "maggie",
      password: "kiwi",
      name: "Maggie",
      email: "maggie@gmail.com",
      isAdmin: false,
    })

    const user4 = await User.create({
      username: "alan",
      password: "orange",
      name: "Alan",
      email: "alan@gmail.com",
      isAdmin: false,
    })

    const user5 = await User.create({
      username: "janet",
      password: "grapes",
      name: "Janet",
      email: "janet@gmail.com",
      isAdmin: false,
    })

    ////-------- VICTORIA'S CSS
    // body {
    //   font-family: sans-serif;
    //   background-image: linear-gradient(white, ac9485e);
    // }

    // a {
    //   text-decoration: none;
    //   font-family: "Garamound";
    //   color: #4f3017;
    // }

    // label {
    //   display: block;
    // }

    // nav a {
    //   display: inline-block;
    //   margin: 1em;
    // }

    // p {
    //   text-align: left;
    //   color: #4f3017;
    //   font-family: "Garamound";
    // }

    // #nav-container-logged-in {
    //   display: flex;
    //   flex-direction: row;
    //   justify-content: space-between;
    // }

    // #nav-container-logged-out {
    //   display: flex;
    //   flex-direction: row;
    //   justify-content: space-between;
    // }

    // form div {
    //   margin: 1em;
    //   display: inline-block;
    // }

    // .landing-container {
    //   min-height: 100vh;
    //   height: 100vh;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   border-bottom: 0px;
    //   background-image: url("http://localhost:8080/pour.jpg");
    //   background-repeat: no-repeat;
    //   background-position: center;
    //   font-weight: 400;
    //   color: #4f3017;
    //   padding: 0rem 5.6rem;
    //   margin-bottom: 0;
    //   top: 0;
    //   left: 0;
    //   bottom: 0;
    //   right: 0;
    // }

    // #landing-text {
    //   font-size: 8rem;
    //   font-family: "Garamound";
    //   font-weight: bold;
    //   justify-content: center;
    // }

    // .all-coffee-container {
    //   display: flex;
    //   flex-direction: row;
    //   flex-wrap: wrap;
    //   justify-content: space-between;
    //   text-align: left;
    // }

    // #coffee-item {
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-evenly;
    //   margin-bottom: 20px;
    //   margin-top: 20px;
    // }

    // #coffee-item-img {
    //   width: 200px;
    //   height: 200px;
    // }

    // #all-coffee-title {
    //   font-family: "Garamound";
    //   text-align: center;
    //   color: #4f3017;
    //   font-weight: bold;
    // }

    // .single-coffee-container {
    //   min-height: 100vh;
    //   height: 100vh;
    //   font-family: "Garamound";
    //   color: #4f3017;
    //   display: flex;
    //   flex-direction: row;
    //   flex-wrap: wrap;
    //   justify-content: space-between;
    //   margin-top: 1.3rem;
    //   margin-bottom: 2rem;

    // }

    // #single-coffee-title {
    //   text-align: center;
    //   color: #4f3017;
    //   font-family: "Garamound";
    // }


    // #singe-coffee-img {
    //   float: left;
    //   width: 300px;
    //   height: 300px;
    //   margin-bottom: 1rem;
    //   margin-right: 2rem;
    //   margin-left: 2rem;
    // }

    // .cart-container {
    //   min-height: 100vh;
    //   height: 100vh;
    //   font-family: "Garamound";
    //   color: #4f3017;
    //   margin-top: 1.3rem;

    // }

    // #cart-title {
    //   text-align: center;
    //   color: #4f3017;
    //   font-family: "Garamound";
    // }

    // .cart-container-items {
    //   display: flex;
    //   flex-direction: column;
    //   flex-wrap: wrap;
    //   justify-content: space-evenly;
    //   margin-top: 1.3rem;
    //   margin-bottom: 2rem;
    // }

    // .cart-item {
    //   display: flex;
    //   flex-direction: row;
    //   flex-wrap: wrap;
    //   align-items: center;
    //   align-content: center;
    //   justify-content: space-evenly;
    //   gap: 50px;
    // }


    // #product-photo {
    //   width: 100px;
    //   height: 100px;
    // }

    // #edit-product {
    //   clear:both;
    //   margin-top: 3rem;
    // }

    // #add-coffee-container{
    //   display: block;
    //   text-align: center;
    // }

    // #add-coffee-title{
    //   display: block;
    //   text-align: center;
    // }

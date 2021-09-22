//How did I find magic methods?
//Run it in your seed function and it will show in your terminal
console.log(Object.keys(User.prototype))
console.log(Object.keys(Cart.prototype))
console.log(Object.keys(Product.prototype))

//Magic Methods -- User Model
[
  '_customGetters',    '_customSetters',
  'validators',        '_hasCustomGetters',
  '_hasCustomSetters', 'rawAttributes',
  '_isAttribute',      'correctPassword',
  'generateToken',     'getCarts',
  'countCarts',        'hasCart',
  'hasCarts',          'setCarts',
  'addCart',           'addCarts',
  'removeCart',        'removeCarts',
  'createCart'
]

//Magic Methods --- Cart Model
[
  '_customGetters',    '_customSetters',
  'validators',        '_hasCustomGetters',
  '_hasCustomSetters', 'rawAttributes',
  '_isAttribute',      'getUser',
  'setUser',           'createUser',
  'getProducts',       'countProducts',
  'hasProduct',        'hasProducts',
  'setProducts',       'addProduct',
  'addProducts',       'removeProduct',
  'removeProducts',    'createProduct'
]

//Magic Methods -- Products Model
[
  '_customGetters',    '_customSetters',
  'validators',        '_hasCustomGetters',
  '_hasCustomSetters', 'rawAttributes',
  '_isAttribute',      'getCarts',
  'countCarts',        'hasCart',
  'hasCarts',          'setCarts',
  'addCart',           'addCarts',
  'removeCart',        'removeCarts',
  'createCart'
]

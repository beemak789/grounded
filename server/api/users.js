const router = require('express').Router();
const {
	models: { User },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
module.exports = router;

//for admin view
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'name']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// commented this out because we already have this via signup route in auth/index.js

// router.post('/', async(req,res,next) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.send(newUser);
//   }catch(err){
//     next(err)
//   }
// })

//for admin view
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['email', 'username', 'name']
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})


//@description     UPDATE user profile information
//@router          PUT/api/users/:userId
router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId
      }
    });
    const updatedUser = await user.update(req.body)
    console.log("the updated user--->", updatedUser)
    res.json(updatedUser)
  } catch (error) {
    next(error);
  }
});


// router.delete('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     await user.destroy();
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

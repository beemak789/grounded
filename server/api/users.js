const router = require('express').Router();
const {
	models: { User },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
module.exports = router;

//@description    Get the user
//@router         GET/api/users
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
    res.json(updatedUser)
  } catch (error) {
    next(error);
  }
});



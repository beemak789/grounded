const router = require('express').Router();
const {
	models: { User },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
module.exports = router;

//for admin view
<<<<<<< HEAD
router.get('/', requireToken,
isAdmin,
async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
=======
router.get('/', requireToken, isAdmin, async (req, res, next) => {
	try {
		const users = await User.findAll({
			attributes: ['id', 'username'],
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});
>>>>>>> 998aa0746209c5b91bafe870ed3136a84172cad0

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
<<<<<<< HEAD
router.get('/:id', requireToken,
isAdmin,
async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'username']
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

=======
router.get('/:id', requireToken, isAdmin, async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				id: req.params.id,
			},
			attributes: ['id', 'username'],
		});
		res.json(user);
	} catch (err) {
		next(err);
	}
});
>>>>>>> 998aa0746209c5b91bafe870ed3136a84172cad0

//may need these later for admin view, if admin wants to edit/or delete users

// router.put('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.send(await user.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     await user.destroy();
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

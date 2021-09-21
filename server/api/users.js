const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async(req,res,next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  }catch(err){
    next(err)
  }
})


router.get('/:id', async (req, res, next) => {
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

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});


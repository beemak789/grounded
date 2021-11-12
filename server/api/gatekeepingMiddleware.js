const {
  models: { User },
} = require('../db');

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
		console.log("the token--->", token)
    const user = await User.findByToken(token);
    req.user = user;
		console.log("the user ---->", user)
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('Not authorized');
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
};

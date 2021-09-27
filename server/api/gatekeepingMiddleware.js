const {models: { User }} = require('../db');

const requireToken = async (req, res, next) => {

	try {
		const token = req.headers.authorization;
		const user = await User.findByToken(token);
		console.log ('this is token', token)
		req.user = user;
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

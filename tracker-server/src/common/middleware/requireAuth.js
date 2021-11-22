const jwt = require('jsonwebtoken');
const userService = require('../../modules/users/userService');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ message: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(401).send({ message: 'Invalid token' });

    const { userId } = payload;
    const user = await userService.findById(userId);
    if (!user) return res.status(401).send({ message: 'User does not exist' });

    req.user = user;
    next();
  });
};

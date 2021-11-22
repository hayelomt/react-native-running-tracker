const jwt = require('jsonwebtoken');
const User = require('../users/user');

module.exports = {
  async signUp({ name, email, password }) {
    let user = await User.create({ email, password, name });
    user = user.toJSON();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    delete user.password;

    return { user, token };
  },
  async login({ email, password }) {
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return null;
      }

      if (!(await user.comparePassword(password))) {
        return null;
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      user = user.toJSON();
      delete user.password;

      return { user, token };
    } catch (_) {
      return null;
    }
  },
};

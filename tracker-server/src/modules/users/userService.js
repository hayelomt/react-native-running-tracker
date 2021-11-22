const User = require('./user');

module.exports = {
  async findById(userId) {
    return User.findById(userId);
  },
  async emailExists(email) {
    const user = await User.findOne({ email });

    return !!user;
  },
  async uniqueUserRule(email) {
    if (await this.emailExists(email)) {
      throw new Error('email already in use');
    }
  },
};

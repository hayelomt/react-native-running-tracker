const authService = require('./authService');

module.exports = {
  async signUp(req, res) {
    const data = await authService.signUp(req.body);

    res.json(data);
  },
  async login(req, res) {
    const user = await authService.login(req.body);
    if (!user) {
      return res.status(400).json({ errors: { email: 'Invalid credentials' } });
    }

    res.json(user);
  },
  async me(req, res) {
    res.json(req.user);
  },
};

const trackService = require('./trackService');

module.exports = {
  async create(req, res) {
    const track = await trackService.create({
      ...req.body,
      userId: req.user._id,
    });

    res.json(track);
  },
  async index(req, res) {
    const tracks = await trackService.findUserTracks(req.user._id);

    res.json(tracks);
  },
};

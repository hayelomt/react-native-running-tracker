const Track = require('./track');

module.exports = {
  create({ name, locations, userId }) {
    return Track.create({ userId, name, locations });
  },
  findUserTracks(userId) {
    return Track.find({ userId: userId });
  },
};

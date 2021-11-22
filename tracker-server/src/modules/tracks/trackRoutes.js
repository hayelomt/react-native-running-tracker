const { Router } = require('express');
const requireAuth = require('../../common/middleware/requireAuth');
const validator = require('../../common/middleware/validator');
const trackController = require('./trackController');
const createTrackDto = require('./dtos/createTrackDto');

const trackRouter = Router();

trackRouter.post(
  '/',
  requireAuth,
  validator(createTrackDto),
  trackController.create
);
trackRouter.get('/', requireAuth, trackController.index);

module.exports = trackRouter;

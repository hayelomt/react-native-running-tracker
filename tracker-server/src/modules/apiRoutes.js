const express = require('express');
const authRouter = require('./auth/authRoutes');
const trackRouter = require('./tracks/trackRoutes');

const { Router } = express;

const apiRoutes = Router();

apiRoutes.use('/auth', authRouter);
apiRoutes.use('/tracks', trackRouter);

module.exports = apiRoutes;

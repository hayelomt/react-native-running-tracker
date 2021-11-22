const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const apiRoutes = require('./src/modules/apiRoutes');
require('colors');

module.exports = async () => {
  const app = express();
  try {
    await mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    app.use(express.json());
    app.use(cookieParser());
    app.use(morgan('dev'));

    app.use('/api/v1/imgs', express.static(`${__dirname}/imgs`));
    app.use('/api/v1', apiRoutes);
  } catch (err) {
    console.log('Setup error', err);
    process.exit(1);
  }

  return app;
};

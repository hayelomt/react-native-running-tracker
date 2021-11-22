const { validationResult } = require('express-validator');
const { parseValidation } = require('../utils/parser');

const errorCb = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(parseValidation(errors.array()));
  }

  next();
};

module.exports = (valRules) => [...valRules, errorCb];

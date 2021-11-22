const { check } = require('express-validator');

module.exports = [
  check('email').not().isEmpty().withMessage('email is required'),
  check('password').not().isEmpty().withMessage('password is required'),
];

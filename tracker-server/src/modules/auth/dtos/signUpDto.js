const { check } = require('express-validator');
const userService = require('../../users/userService');

module.exports = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('name is required')
    .isLength({ min: 3, max: 20 })
    .withMessage('name must be between 3 - 20 characters'),
  check('email')
    .not()
    .isEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('must be a valid email')
    .custom(async (email) => await userService.uniqueUserRule(email)),
  check('password')
    .not()
    .isEmpty()
    .withMessage('password is required')
    .isLength({ min: 5, max: 20 })
    .withMessage('password must be between 5 - 20 characters'),
];

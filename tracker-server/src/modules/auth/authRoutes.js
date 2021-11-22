const { Router } = require('express');
const validator = require('../../common/middleware/validator');
const authController = require('./authController');
const signUpDto = require('./dtos/signUpDto');
const requireAuth = require('../../common/middleware/requireAuth');
const loginDto = require('./dtos/loginDto');

const router = Router();

router.post('/sign-up', validator(signUpDto), authController.signUp);
router.post('/login', validator(loginDto), authController.login);
router.post('/me', requireAuth, authController.me);

module.exports = router;

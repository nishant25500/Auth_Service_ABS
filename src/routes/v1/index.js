const express = require('express');

const UserController = require('../../controllers/user-controller');
const {AuthRequestValidator} = require('../../middlewares/index');

const router  = express.Router();

//user api
router.post('/signup',AuthRequestValidator.validateUserAuth,UserController.create);
router.post('/signin',AuthRequestValidator.validateUserAuth,UserController.signIn);
router.get('/isAuthenticated',UserController.isAuthenticated);


module.exports = router;
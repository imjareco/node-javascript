const express = require('express');
const { createUser } = require('../controllers/user.controller');
const validator = require('../middlewares/validator');
const userValidator = require('../schemas/user.validator');

const router = express.Router();

// router.get('/:id', validator('params', userValidator.get), findUser);
router.post('/register', validator('body', userValidator.post), createUser);
// router.put('/update', validator('body', userValidator.put), updateUser);
// router.delete('/:id', validator('params', userValidator.delete), removeUser);

// WITH MIDDLEWARE
// router.put("/account/update", securityMiddleware.checkToken, userController.updateUser);
// router.get("/account/logout", userController.logOutUser);
// router.delete("/remove/account", userController.deleteUser);

module.exports = router;

const express = require('express');

const headersSchema = require('../schemas/headers.validator');
const validator = require('../middlewares/validator');
const { endpoint } = require('../config');

const router = express.Router();

// Main
router.use(endpoint.base, validator('headers', headersSchema.secure));

// Routes
router.use(endpoint.auth, require('../routes/auth.routes'));
router.use(endpoint.user, require('../routes/user.routes'));

module.exports = router;

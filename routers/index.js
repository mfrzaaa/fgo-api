const express = require('express');

const fgoRoutes = require('./fgo-routes');
const authRoutes = require('./auth-routes');
const userRoutes = require('./user-routes');

const router = express.Router();

router.use('', fgoRoutes);
router.use('', authRoutes);
router.use('', userRoutes);

module.exports = router;
const router = require('express').Router();
const primaryItemsRoutes = require('./primaryItems');

router.use(primaryItemsRoutes);

module.exports = router;

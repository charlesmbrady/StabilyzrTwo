const router = require('express').Router();
const projectsRoutes = require('./projects');
const testsRoutes = require('./tests');

router.use(projectsRoutes);
router.use(testsRoutes);

module.exports = router;

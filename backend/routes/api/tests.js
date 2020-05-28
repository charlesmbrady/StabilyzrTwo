const router = require('express').Router();
const testsController = require('../../controllers/testsController');
const withAuth = require('../../middleware.js');

// Matches with "/api/..."

// CRUD
router.post('/tests', withAuth, testsController.create);
router.get('/tests/:id', withAuth, testsController.getById);
router.put('/tests/:id', withAuth, testsController.updateById);
router.delete('/tests/:id', withAuth, testsController.deleteById);

router.get('/projects/:id/tests', withAuth, testsController.getAllByProjectId);

module.exports = router;

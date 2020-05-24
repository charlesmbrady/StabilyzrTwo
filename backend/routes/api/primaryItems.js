const router = require('express').Router();
const primaryItemsController = require('../../controllers/primaryItemsController');
const withAuth = require('../../middleware.js');

// Matches with "/api/..."

// CRUD
router.post('/primaryitems', withAuth, primaryItemsController.create);
router.get('/primaryitems/:id', withAuth, primaryItemsController.getById);
router.put('/primaryitems/:id', withAuth, primaryItemsController.updateById);
// router.delete('/primaryitems/:id', withAuth, primaryItemsController.deleteById);

router.get('/primaryitems', withAuth, primaryItemsController.getAllByUserId);

module.exports = router;

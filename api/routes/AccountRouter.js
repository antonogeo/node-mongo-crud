const Router = require('express');
const AccountController = require('../controllers/AccountController');

const router = Router();

router.get('/:id', AccountController.getAccount);

module.exports = router;
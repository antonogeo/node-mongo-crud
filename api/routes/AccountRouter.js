const Router = require('express');
const AccountController = require('../controllers/AccountController');

const router = Router();

router.get('/:id', AccountController.getAccount);

router.post('/', AccountController.createAccount);

router.delete('/:id', AccountController.deleteAccount);

module.exports = router;
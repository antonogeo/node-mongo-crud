const AccountService = require('../services/AccountService');

function getAccount (req, res, next) {
    AccountService.getAccount(req.params.id).then(account => {
        res.status(200).json({ account: account })
    }).catch(err => {
        res.status(500).json({ error: err.message })
    });
}

module.exports = { getAccount }
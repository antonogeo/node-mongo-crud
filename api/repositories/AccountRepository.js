const Account = require('../models/Account');

function getAccount(id) {
    return Account.findById(id).select('firstName').exec();
}

module.exports = { getAccount }
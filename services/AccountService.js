const AccountRepository = require('../repositories/AccountRepository');

function getAccount(id) {
    return AccountRepository.getAccount(id)
    .then(account => { return account; })
    .catch(err => { return err; });
}

module.exports = { getAccount }
const AccountRepository = require('../repositories/AccountRepository');

function getAccount(id) {
    return AccountRepository.getAccount(id)
    .then(account => { return account; })
    .catch(err => { return err; });
}

function createAccount(account) {
    return AccountRepository.createAccount(account)
    .then(account => { return account; })
    .catch(err => { return err; });
}

function deleteAccount(id) {
    return AccountRepository.deleteAccount(id)
    .then(account => { return account._id; })
    .catch(err => { return err; });
}

module.exports = { getAccount, createAccount, deleteAccount}
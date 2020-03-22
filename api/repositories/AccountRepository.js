const Account = require('../models/Account');
const mongoose = require('mongoose');

function getAccount(id) {
    return Account.findById(id).select('firstName').exec();
}

function createAccount(account) {
    const mongoAccount = new Account({
        _id: new mongoose.Types.ObjectId(),
        email: account.email,
        firstName: account.firstName,
        age: account.age
    })

    return mongoAccount.save();
}

function deleteAccount(id) {
    return Account.findOneAndDelete(id).exec();
}

module.exports = { getAccount, createAccount, deleteAccount }
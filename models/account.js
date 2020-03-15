const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {type: String, unique: true, required: [true, "can't be blank"]},
  firstName: {type: String, required: [true, "can't be blank"]},
  age: {type: Integer}
});

module.exports = mongoose.model('account', accountSchema);

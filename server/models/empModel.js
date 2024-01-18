const mongoose = require('mongoose');

const empModel = mongoose.Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
});

const Employee = mongoose.model('Employee', empModel);
module.exports = Employee;

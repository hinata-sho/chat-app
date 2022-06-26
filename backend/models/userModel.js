const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: 'string',
      required: [true, 'Please add a name'],
    },
    email: {
      type: 'string',
      required: [true, 'Please add a email'],
      unique: true,
    },
    password: {
      type: 'string',
      required: [true, 'Please add a password'],
    },
    connectionId: {
      type: 'string',
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);

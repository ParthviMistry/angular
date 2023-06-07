const mongoose = require('mongoose');

const signupSchema = mongoose.Schema(
  {
    name: { type: String, trim: true, unique: true },
    email: { type: String, trim: true, unique: true },
    password: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    zip: { type: Number, trim: true },
  },
  {
    timestamps: true,
  }
);

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;

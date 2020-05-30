'use strict';

module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
  });
  return mongoose.model('User', UserSchema);
};

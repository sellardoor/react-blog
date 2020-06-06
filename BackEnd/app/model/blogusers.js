'use strict';

module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const UserSchema = new Schema({
    avatar: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    root: { type: String },
    origin: { type: String },
    date: { type: Number },
    recentlogin: { type: Number },
  });
  return mongoose.model('Blogusers', UserSchema);
};

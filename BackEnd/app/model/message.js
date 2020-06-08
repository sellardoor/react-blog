'use strict';

module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const MessageSchema = new Schema({
    author: { type: String },
    avatar: { type: String },
    content: { type: String },
    pid: { type: String },
    date: { type: Number },
    type: { type: String },
    fathername: { type: String },
  });
  return mongoose.model('Message', MessageSchema);
};

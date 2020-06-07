'use strict';

module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const MessageSchema = new Schema({
    message: { type: Array },
  });
  return mongoose.model('Message', MessageSchema);
};

'use strict';

module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const ArticleSchema = new Schema({
    title: { type: String },
    info: { type: String },
    type: { type: String },
    content: { type: String },
    date: { type: Number },
    img: { type: String },
    hot: { type: Boolean },
    view: { type: Number },
  });
  return mongoose.model('Article', ArticleSchema);
};

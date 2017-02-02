'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: { type: String},
  description: { type: String },
  author: { type: String },
  auid: { type: String,  unique: true },
  contentText: { type: String },
  publishedAt: { type: Date },
  mainImage: { type: String }
});

ArticleSchema.statics = {
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    getAll: function(query, callback) {
        this.find(query, callback);
    }
}

var article = mongoose.model('article', ArticleSchema);

module.exports = {
    Article: article
};


// app.User.find().or([{ 'firstName': { $regex: re }}, { 'lastName': { $regex: re }}]).sort('title', 1).exec(function(err, users) {
//     res.json(JSON.stringify(users));
// });


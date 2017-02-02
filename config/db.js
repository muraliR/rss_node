var Mongoose = require('mongoose');
Mongoose.connect("mongodb://rss:rss@ds139949.mlab.com:39949/rssndtv");
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.db = db;
'use strict';

var Article = require('../model/article').Article;

exports.all = function (req, res) {
    Article.getAll(function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.get = function (req, res) {
    Article.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.search = function (req, res) {
    var re = new RegExp(req.query.query, 'i');
    Article.find({'$or':[{title: re},{description: re}, {author: re}]}).exec(function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    })
};
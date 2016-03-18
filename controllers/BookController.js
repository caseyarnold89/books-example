var Book = require('../models/Book');
var Author = require('../models/Author');
var mongoose = require('mongoose');

module.exports = {
  create: function(req, res, next) {
    Book.create(req.body, function(err, result) {
      if (err) return next(err);
      res.status(200).json(result);
    });
  },

  index: function(req, res, next) {
    // Book.find(req.query, function(err, result) { //does the same thing as below but we can add other functions in like .sort
    //   if (err) return next(err);
    //   res.status(200).json(result);
    // });
    
    Book
        .find(req.query)
        .sort({ title: 1})
        .exec(function(err, result){
            if (err) return next(err);
            res.status(200).json(result);            
        })
  },

  show: function(req, res, next) {
    // db.books.findOne({
    //   _id: mongojs.ObjectId(req.params.id)
    // }, function(err, result) {
    //   if (err) return next(err);
    //   res.status(200).json(result);
    // });
    
    Book
        .findById(req.params.id)
        .exec(function(err, result) {
            if (err) return next(err);
            res.status(200).json(result);
        })
  },

  update: function(req, res, next) {
      Book.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(req.params.id)},
        req.body,
        { new: true }, //if third argument is object, it knows its an option. if its a function, it knows its a callback
        function(err, result) {
            if (err) return next(err);
            res.status(200).json(result);
        }
      ) //req.params.id is a string, so we need to find convert it to the right type
      
        // Book.findById(req.params.id, function(err, book) {
        // if (err) return next(err);
        //     book.title = req.body.title;
        //     book.author = req.body.author;
        //     book.rating = req.body.rating;
        //     book.save(function(err, result) {
        //         if (err) return next(err);
        //         res.status(200).json(result);
        //     });           
        // });
  },

  destroy: function(req, res, next) {
    // db.books.remove({
    //   _id: mongojs.ObjectId(req.params.id)
    // }, function(err, result) {
    //   if (err) return next(err);
    //   res.status(200).json(result);
    // });
    Book.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) return next(err);
        res.status(204).send();
    })
  }
};
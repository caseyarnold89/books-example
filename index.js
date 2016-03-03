var express = require('express');
var bodyParser = require('body-parser');

var BookController = require('./controllers/BookController');

var logger = function(req, res, next) {
  console.log('body --> ', req.body);
  console.log('params --> ', req.params);
  next();
};

var app = express();

app.use(bodyParser.json());

app.get('/books', logger, BookController.index);
app.get('/books/:idx', BookController.show);
app.put('/books/:idx', BookController.update);
app.post('/books', BookController.create);
app.delete('/books/:idx', BookController.destroy);

var port = 3000;
app.listen(port, function() {
  console.log('listening to port ', port);
});

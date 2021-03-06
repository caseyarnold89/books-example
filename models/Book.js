// module.exports = [{
//   title: 'Mist Born',
//   author: 'Brennan',
//   rating: 3
// }, {
//   title: 'Rainbow 6',
//   author: 'Tom Clancey',
//   rating: 6
// }, {
//   title: 'Clear And Present Danger',
//   author: 'Tom Clancey',
//   rating: 6
// }, {
//   title: 'Everyone does numba 2',
//   author: 'Sanitation Worker #5',
//   rating: 2 // duh
// }];

var mongoose = require('mongoose');

var Book = new mongoose.Schema({
    title: {type: String },
    // author: {type: String },
    author: { type: mongoose.Schema.ObjectId, ref: 'Author' }, //the string after ref is what is the string is your module.exports of Author
    rating: { type: Number, min: 1, max: 10 }
});

module.exports = mongoose.model('Book', Book);
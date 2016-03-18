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

var Author = new mongoose.Schema({
    name: {type: String, maxLength: 60, required: true },
    living: { type: Boolean },
    age: {type: Number, min: 0 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Author', Author);
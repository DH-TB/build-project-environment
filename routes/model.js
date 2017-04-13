let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let Cat = mongoose.model('Cat', {
    text: String,
    time:String,
});

module.exports = Cat;
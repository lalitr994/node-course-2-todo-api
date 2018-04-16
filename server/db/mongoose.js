var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://todoapp:Taxino9211#@ds239587.mlab.com:39587/todoapp');

module.exports = {mongoose}
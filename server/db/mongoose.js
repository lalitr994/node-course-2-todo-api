var mongoose = require('mongoose');
mongoose.Promise = global.Promise;



// let db = {
//     localhost: 'mongodb://localhost:27017/TodoApp',
//     mlab: 'mongodb://<user>:<pass>@ds149268.mlab.com:49268/todoapp'
//   };
//   mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

// mongoose.connect('mongodb://localhost:27017/TodoApp');


mongoose.connect('mongodb://todoapp:lalit123#@ds239587.mlab.com:39587/todoapp');

module.exports = {mongoose}
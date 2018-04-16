var mongoose = require('mongoose');
mongoose.Promise = global.Promise;



let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://todoapp:lalit123@ds149268.mlab.com:49268/todoapp'
  };


mongoose.connect(mongoose.connect( db.localhost || db.mlab));

module.exports = {mongoose}
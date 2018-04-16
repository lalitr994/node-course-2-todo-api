var mongoose = require('mongoose');
const validator = require('validator');

var user = mongoose.model('Users',{
    email:{
        type: String,
        require: true,
        trim: true,
        minlength: 5
    }
})

module.exports = {user}
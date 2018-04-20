var mongoose = require('mongoose');
const validator = require('validator');

var toDo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim : true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    },
    _creator: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true
  }
})

module.exports ={toDo}
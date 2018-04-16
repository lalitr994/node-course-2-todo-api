const { mongoose } = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb'); 
const { toDo } = require('./../server/models/todo');
const { user } = require('./../server/models/user');


// toDo.remove({}).then((result)=>{
//     console.log(result);
// })

toDo.findByIdAndRemove('5ad46cf59b908d1d9ca27ed9').then((todo)=>{
    console.log("record removed",todo);
})
const { mongoose } = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb'); 
const { toDo } = require('./../server/models/todo');
const { user } = require('./../server/models/user')

// var id = '5acb5e2eb45264107c97d5b8';

var id = '5acc658cf32cb00e64c8fc4d';  //userID




// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
// }
// find

// toDo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// })

// findOne

// toDo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// })

//find by id

toDo.findById(id).then((todos)=>{
    if(!todos){
        return console.log('Id not found');
    }
    console.log("Todo By Id",todos);
}).catch((e)=>console.log(e));

user.findById(id).then((todos)=>{
    if(!todos){
        return console.log('Id not found');
    }
    console.log("Todo By Id",todos);
}).catch((e)=>console.log(e));
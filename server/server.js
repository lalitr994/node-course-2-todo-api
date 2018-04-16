const {ObjectID} = require('mongodb');


var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {toDo} = require('./models/todo');
var {user} = require('./models/user');


var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new toDo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
    toDo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }

    toDo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(400).send();
        }
        res.send({todo});
    }).catch((err)=>{
        res.status(400).send();
    })

})

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // delete Many

//   db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
//       console.log(result);
//   })

    // delete one

    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Todos').findOne({text:'eat lunch'}).then((result)=>{
        console.log(result);
    })

  db.close();
});

// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5acb527bb4d9c42d88d1dfd3")
    },{
        $set:{
            text:'Rakesh'
        },
        $inc:{
            age:5
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })
    // db.close();
});

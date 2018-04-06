const MongodbClient = require('mongodb').MongoClient;

MongodbClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to the server');
    }
    console.log("Connected to the  MongoDB server");
    // const db = client.db('TodoApp');
    const db = client.db('Users');
});


    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //        return console.log("Unable to insert Todo",err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

//     db.collection('Users').insertOne({
//         name: 'Lalit',
//         age: 25,
//         location : 'pune'
//     },(err,result)=>{
//         if(err){
//                    return console.log("Unable to insert Users",err);
//                 }
        
//                 console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//     })
    
//     client.close();
// });
const { SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123dabc!';

// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     })
// })

var saltPassword = "$2a$10$CHtVUK9XHNsCc5nd82pUV.iOO4K.lGz7H06NjwBw1c/06t01JQWny";

bcrypt.compare(password, saltPassword,(err, res)=>{
    console.log(res);
})
// var data ={
//     id:10
// }
// var token = jwt.sign(data,'123Abc');
// console.log("token is"+token);

// var decoded = jwt.verify(token,'123Abc');
// console.log("decoded token is"+JSON.stringify(decoded));



// var message = "I am user number 3";
// var hash = SHA256(message).toString();

// console.log(`message : ${message}`);
// console.log(`hash : ${hash}`);


// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data)+'Some Secret').toString()
// }

// token.data.id=5;

// token.hash = SHA256(JSON.stringify(token.data)).toString()


// var resultHash = SHA256(JSON.stringify(data)+'Some Secret').toString();

// resultHash==token.hash ? console.log("Data was not changed") : console.log("data was changed... Do not trust!!!")


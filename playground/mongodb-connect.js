// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Deep', age: 25};
// var {name} =  user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //Adding data to MongoDB
    //Accepts two arguments one is object to be inserted in the database
    //Second argument is the callback function which gets fired after the entry has been done to the database
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //     if(err){
    //       return console.log('Unable to insert Todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Inserting into users collection
    // db.collection('Users').insertOne({
    //   name: 'Deep Trivedi',
    //   age: '25',
    //   location: 'Edison, NJ'
    // }, (err, result) => {
    //     if(err){
    //       return console.log('Unable to insert to Users', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});

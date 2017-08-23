const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find().toArray().then( (docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todo', err);
    // });

    // db.collection('Todos').find().count().then( (count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos count', err);
    // });

    db.collection('Users').find({name: 'Deep Trivedi'}).toArray().then((docs) => {
      console.log('User Deep');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch Deeps objects', err);
    });

    //db.close();
});

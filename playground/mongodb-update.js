const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server');


    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('599ef82f40a8202d19ee9c63')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal:false
    }).then( (result) => {
      console.log(result);
    });

    //db.close();
});

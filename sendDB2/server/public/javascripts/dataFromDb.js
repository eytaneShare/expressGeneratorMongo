var mongodb = require('mongodb')
    var MongoClient = mongodb.MongoClient
    var connectionURL = 'mongodb://127.0.0.1:27017'
    var databaseName = 'projet_Ecommerce';



const dataFromDb = (/*myCallback*/)=>{


    
    MongoClient.connect(connectionURL, { useNewUrlParser: true },/*{useUnifiedTopology:true}*/ (error, client) =>
    {
   /* if (error) {
    myCallback(null,error)
    }
    myCallback(data);
    console.log('Connected correctly !');
    */
    var db = client.db(databaseName)
     db.collection('product').find().toArray(function(error, data)  {
   // if (error) {
    //return console.log('Unable to find the user')
    //}
    //data = JSON.stringify(data)
   // console.log(data);
    // data = JSON.parse(data)
    console.log(data)
   
  // data= JSON.stringify(data)
   return (data);
    })
    // Pointer - go to doc
    // db.collection('tasks').find({completed: false}).toArray()
    })
};

module.exports = dataFromDb
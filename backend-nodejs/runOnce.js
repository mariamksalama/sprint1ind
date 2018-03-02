var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Store-Database";




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Store-Database");

  var ProductsObj = [

  {id: 9, name: 'kiwi',price: 20,createdAt: '' ,updatedAt:'',seller:'Mariam'},
  {id: 10, name: 'Banana',price: 30,createdAt: '',updatedAt:'',seller:'Mariam'},
  {id: 11, name: 'Apple',price: 20,createdAt: '',updatedAt:'',seller:'Mariam'},
  {id: 12, name: 'Peach',price: 20,createdAt: '',updatedAt:'',seller:'Mariam'},
  {id: 13, name: 'Strawberry',price: 25,createdAt: '',updatedAt:'',seller:'Mariam'},
  {id: 14, name: 'Apricot',price: 30,createdAt: '',updatedAt:'',seller:'Mariam'},
  ];

  var usersObj = [
    { username: '1', password: '1'},
    { username: '2', password: '2'},
    { username: 'user', password: 'user'},
    { username: 'admin', password: 'admin'},
    { username: 'manager', password: 'manager'}
  ];
  var collectionsObj = [
    {name: 'Products', data: null},
    {name: 'Users', data: usersObj},
    // {name: 'Carts', data: cartsObj},
  ];

  for (var i = 0; i < collectionsObj.length; i++){
    if(collectionsObj[i].data == null){
      dbo.createCollection(collectionsObj[i].name , function(err, res){
        if(err) throw err;
        done = true;
      });
    } else {
      dbo.collection(collectionsObj[i].name).insertMany(collectionsObj[i].data,function(err,res) {
        if(err) throw err;
        done = true;
      });
    }
    console.log("Collection: "+collectionsObj[i].name+" created !");
  }
  console.log("Press Control C");
}); 

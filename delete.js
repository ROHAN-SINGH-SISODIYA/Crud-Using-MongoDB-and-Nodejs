var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


http.createServer(function(req,res){
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("Rohan");
		  var myquery = { dname: 'rohan rajput' };
		  dbo.collection("student").deleteOne(myquery, function(err, obj) {
		    if (err) throw err;
		    console.log("1 document deleted");
		    db.close();
		  });
		});
	}).listen(3000);
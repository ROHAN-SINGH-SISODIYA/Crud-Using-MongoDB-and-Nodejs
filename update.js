var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


http.createServer(function(req,res){
		MongoClient.connect(url, function(err, db)
		{
		  if (err) throw err;
		  var dbo = db.db("Rohan");
		  var myquery = { dname: "ankita" };
		  var newvalues = { $set: {dname: "Mickey",demail: "mick@gmail.com", daddress: "Canyon 123" } };
		  dbo.collection("student").updateOne(myquery, newvalues, function(err, res) {
		    if (err) throw err;
		    console.log("1 document updated");
		    db.close();
		  });
		});
	}).listen(3000);
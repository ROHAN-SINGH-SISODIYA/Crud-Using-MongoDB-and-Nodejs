var http = require('http');

var MongoClient =require('mongodb').MongoClient;
var url ="mongodb://localhost:27017";

http.createServer(function(req,res){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var dbo = db.db("Rohan");
		   dbo.collection("student").find({}, { projection: { _id: 0, dname: 1, demail: 1 } }).toArray(function(err, result){
			if(err) throw err;
			res.writeHead(200,{"Content-Type":"text/html"});
			res.end(JSON.stringify(result));
			console.log(result);
		});
	});
}).listen(2000);
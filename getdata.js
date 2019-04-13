var http =require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
  if(req.method==="GET")
  {  
  	 res.writeHead(200,{"Content-Type":"text/html"});
  	 fs.createReadStream("./public/index.html","UTF-8").pipe(res);
     console.log("calling via get");
  }
  else if(req.method==="POST")
  {
  	var data="";
  	req.on("data",function(chunk){
  		data+=chunk;
  	});
  	req.on("end",function(){
  		console.log(data);
  		res.writeHead(200,{"Content-Type":"text/html"});
  		res.end("$(data)");
  	});
    console.log("Post Mehtod");
  }


});
server.listen(4000);
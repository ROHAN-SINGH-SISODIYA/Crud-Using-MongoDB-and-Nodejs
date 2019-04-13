var http =require('http');
var fs=require('fs');
var path= require('path');

http.createServer(function(req, res){
  
  if(req.url==="/"){
  fs.readFile("./public/index.html","UTF-8",function(arr,html){
  	res.writeHead(200,{"content-type": "text/html"});
  	res.end(html);
  });
}else if(req.url.match("\.css$")){
	var cssPath =path.join(__dirname,'public',req.url);
	var fileStream = fs.createReadStream(cssPath,"UTF-8");
	res.writeHead(200,{"content-type":"text/css"});
	fileStream.pipe(res);
}else{
	res.writeHead(404,{"content-type":"text/html"});
	res.end("No page found");
}

}).listen(3000);
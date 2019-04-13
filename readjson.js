var http =require('http');
var staff =require('./public/data/staff.json');

var server=http.createServer(function(req,res){

//console.log(req.url);
if(req.url === "/")
{
	res.writeHead(200,{"content-type":"text/json"})
	res.end(JSON.stringify(staff));
}else if(req.url === "/reactjs")
{
   var data=staff.filter(function(item){
   	 return item.language==="reactjs";
   });
   	res.writeHead(200,{"content-type":"text/json"})
    res.end(JSON.stringify(data));

}
else if(req.url === "/nodejs")
{
   var data=staff.filter(function(item){
   	 return item.language==="nodejs";
   });
   	res.writeHead(200,{"content-type":"text/json"})
    res.end(JSON.stringify(data));

}

});
server.listen(3000,function(){
	console.log("listen 3000");
})
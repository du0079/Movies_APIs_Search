var express = require("express");
var app=express();
var request= require("request")
app.set("view engine","ejs");

app.use(express.static("views"));
app.get("/",function(req,res){
	res.send("Tested OK");
});

app.get("/movies",function(req,res){
    request("http://www.omdbapi.com/?s=california&apikey=thewdb",function(error,response,body){
    	if(!error && response.statusCode == 200){
    	 console.log(typeof body);
        res.send(body);
    	}
    });
	 // res.render("request",{});
	 // res.send("koi hai")
});

 app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
  console.log("server has started");
});
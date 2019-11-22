var express = require("express");
var app=express();
var request= require("request")
app.set("view engine","ejs");

app.use(express.static("views"));
app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    var query = req.query.search;
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=YOUR_API_KEY';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render('results', {data: data});
        }
    });
}); 


 app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
  console.log("server has started");
});
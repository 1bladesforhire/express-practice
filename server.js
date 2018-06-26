//Require necessary framework
var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');

//create the express app
var app = express();
var port = 3000;
//have express use body-parser for request body
app.use(bodyParser.urlencoded({ extended: true }));

//sample data for playtime
var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
    ];

//set the default response
app.get(`/`, function(request, response){
    response.send("Get requested at '/'");
});

//set up GET routes for quotes
app.get('/quotes', function(req, res){
    //check for year query parameters
    if(req.query.year){
        res.send("Return a list of quotes from the year: " + req.query.year);
      }
      else{
          res.json(quotes);
      }
});

//GET function for id specific requests
app.get('/quotes/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
});

//POST to create new quote
app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    res.json(req.body);
  });

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});
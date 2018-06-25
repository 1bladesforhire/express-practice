var express = require('express');
var app = express();
var port = 3000;

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

app.get(`/`, function(request, response){
    response.send("Get requested at '/'");
});

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});
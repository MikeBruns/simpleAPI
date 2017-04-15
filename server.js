var express = require('express');
var app = express();


//Base url
app.get('/', function(request, response) {
    //Sends in JSON (thans express!)
    response.send('Hello World!');
});


//Let's run it here
app.listen(3000, function() {
    console.log('It\'s ALIVE!');
});
    
//Messing with git control
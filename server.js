var express = require('express');
var app = express();


//Base url
app.get('/', function(request, response) {
    //Sends in JSON (thans express!)
    response.send('Hello World!');
});

app.get('/mypage', function(req, resp){
   resp.send('<h1>Look at me!</h1>'); 
});

//Let's run it here
app.listen(3000, function() {
    console.log('It\'s ALIVE!');
});
    
//Messing with git control
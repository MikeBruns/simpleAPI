var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var ingredients = [
  {
    "id"  :"123",
    "text":"buns"
  },
  {
    "id"  :"345",
    "text":"patty"
  },
  {
    "id"  :"678iq",
    "text":"ketchup"
  },
  {
    "id"  :"jkdafs80",
    "text":"cheese"
  }
];


//Base url
app.get('/', function(request, response) {
    //Sends in JSON (thans express!)
    response.send('Hello World!');
});


//Showing list of ingredients
app.get('/ingredients', function(request, response) {
    response.send(ingredients);
});


app.post('/ingredients', function(request, response) {
    //express finds the data in the body
    //using jQuery
    var ingredient = request.body;
    
    if(!ingredient || ingredient.text == ""){
        //No ingredient found
        response.status(500).send({error: "Must have text."});
    } else {
        //Add new ingredient to ingredient array
        ingredients.push(ingredient);
        response.status(200).send(ingredient);
    }
});


//HTML page ;) ;)
app.get('/mypage', function(req, resp){
   resp.send('<h1>Look at me!</h1>'); 
});


//Let's run it here
app.listen(3000, function() {
    console.log('It\'s ALIVE!');
});
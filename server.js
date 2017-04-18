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
    "id"  :"123",
    "text":"buns2"
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


//REST GET - Get's data
app.get('/ingredients', function(request, response) {
    response.send(ingredients);
});


//REST POST = Adding new item
app.post('/ingredients', function(request, response) {
    //express finds the data in the body
    //using jQuery
    var ingredient = request.body;
    
    if(!ingredient || ingredient.text === ""){
        //No ingredient found
        response.status(500).send({error: "Must have text."});
    } else {
        //Add new ingredient to ingredient array
        ingredients.push(ingredient);
        response.status(200).send(ingredient);
    }
});


//REST PUT - Updates data
app.put('/ingredients/:ingredientId', function(request, response){
    var text = request.body.text;
    
    if(!text || text === ""){
        response.status(500).send({error: "Missing ingredient text"});
    } else {
        var objectFound = false;
        for(var x = 0; x < ingredients.length; x++){
            var ing = ingredients[x];
            
            if(ing.id === request.params.ingredientId){
                ingredients[x].text = text;
                objectFound = true;
                break;
            }
        }
        
        if(!objectFound){
            response.status(500).send({error: "Id not found"});
        } else { 
            response.status(200).send(ingredients);
        }
    }
});


//REST DELETE - Deletes data
//Not built yet
app.delete('/ingredients/:ingredientId', function(request, response) {
    var text = request.body.text;
    
    if(!text || text === ""){
        response.status(500).send({error: "Missing ingredient text"});
    } else {
        var objectFound = false;
        for(var x = 0; x < ingredients.length; x++){
            var ing = ingredients[x];
            
            if(ing.id === request.params.ingredientId){
                ingredients.splice(x,1);
                objectFound = true;
                break;
            }
        }
        
        if(!objectFound){
            response.status(500).send({error: "Id not found"});
        } else { 
            response.status(200).send({success: "Deleted!"});
            response.status(200).send(ingredients);
        }
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
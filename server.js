var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res){
  res.send("welcome to the home page");
})

app.listen(PORT, function(){
 console.log("The server has connected");
});

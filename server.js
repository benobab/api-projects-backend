var express = require("express");

var app = express();

app.get('/',function(req,res){
    res.send("Hello World! From ben");
});

app.listen(8080,function(){
    console.log("App running on 8080");
});
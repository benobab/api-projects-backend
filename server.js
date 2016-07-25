var express = require("express");
var path = require('path');

var app = express();
var response = {"unix":null,"natural":null};
//Index File
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
//Other Routes
app.get('*',function(req,res){
    console.log(req.url);
    //Send json data
    var arg = String(req.url).substr(1,req.url.length);
    if(isNumeric(Number(arg))){
        console.log("Unix Time !");
        response["unix"] = arg;
        response["natural"] = new Date(Number(arg)).toDateString();
    }else{
        response["natural"] = decodeURIComponent(arg);
        console.log(new Date(decodeURIComponent(arg)));
        response["unix"]= (new Date(decodeURIComponent(arg)).getTime() / 1000).toFixed(0);
    }
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(response));
    console.log(JSON.stringify(response));
    
});

app.listen(8080,function(){
    console.log("App running on 8080");
});


//USEFUL FUNCTION
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
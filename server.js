const express = require("express");
const bodyParser = require("body-parser");


const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (request, resp){
    resp.sendFile(__dirname + "/index.html");
});

// app.get("/about", function(request, resp){
//     resp.send("<h1>This is Vishnu Nadella</h1>")
// });


app.post("/", function(request, resp){
    console.log(request.body);
    var n1 = Number(request.body.num1);
    var n2 = Number(request.body.num2);
    var result = n1 + n2;
    resp.send("The answer is " + result)
});

app.listen(3000, function(){
    console.log("Server has started at local host port 3000")
});
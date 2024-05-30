const express = require("express")
const greeting = require('./greeting');

var app = express()
app.get("/",function(request,response){
	response.send("Hello World! " + greeting())
})

app.listen(10000, function () {
	console.log("Started application on port %d", 10000)
});
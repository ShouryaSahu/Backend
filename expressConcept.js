// import express from 'express' // we can use both to get express framework in this we requiring express package from npm
const express = require('express');

const app = express();

app.use(function(req, res, next){
    console.log("Middleware Chala!!");
    next(); // Request aage forward krdo !!!
    
}); // Server pr koi bhi request aayegi sbse phle yeah run karega, haar request se phle koi bhi route ki request aayegi hamesha yeh phle run karega

app.use(function(req, res, next){
    console.log("Ek aur baar middleware chala ");
    next(); 
})
// we can create routes "/" using .get(route, requestHandler)
app.get("/", function(req, res){
    res.send("Home Page used Nodemon")
})
app.get("/profile", function(req, res){
    res.send("Profile page using route")
})
// maan lo isme error nikalna hai
app.get("/about", function(req, res, next){
    return next(new Error("Not implemented (Run in console)"));
})

// Error handle krne ke liye .use() ekdm last mei use karenge
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send("Something went wrong with the code!! (Run in frontend)")
})

app.listen(3000, function(){
    console.log("Server runs on http://localhost:3000");
}); 
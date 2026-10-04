const express = require('express');
const app = express();
const path = require('path');

// we use form using these two lines 
// these are Parsers
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup and creating a new folder 'views' and add pages in them...
app.set('view engine', 'ejs');

// rendering the views folder page
app.get("/" , function(req, res){
    res.render("index")
});

// Jo part dynamic banana hai like /profile/ uske baad kuch bhi name aaye toh chalna chahiye toh dynamic banane ke liye colon " : " lagayenge ge
app.get("/profile/:username" , function(req, res){
    res.send(`Welcome, ${req.params.username}`)
});

app.get("/author/:username/:age" , function(req, res){
    res.send(`Welcome, Author : ${req.params.username} \n Age : ${req.params.age}`)
});

app.listen(3000, function(){
    console.log("Its running http://localhost:3000");
})
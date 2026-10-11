const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/', function(req, res){
    res.send("hey")
});

app.get('/create', async function(req, res){
  let createdUser =  await userModel.create({
        name: "Preeti",
        email: "Preeti@gmail.com",
        username: "Q2"
    })
    res.send(createdUser);
});

app.get('/update', async function(req, res){
    // userModel.findOneAndUpdate(findone, update, {new : true}) Syntax for updation

    let updatedUser = await userModel.findOneAndUpdate(
            {username: "shourya"},
            {name: "Shourya Sahu"},
            {new: true}
        );
    res.send(updatedUser);
});

app.get('/read', async function(req, res) {
   let users = await userModel.find(); // to find/read all users
//    let users = await userModel.find({username: "Q2"}); // to find/read particular users
   res.send(users); 
});

app.get('/delete', async function(req, res) {
//   
   let users = await userModel.findOneAndDelete({username: "shourya"}); // to find/read particular users
   res.send(users); 
});

app.listen(3000, function(){
    console.log("Done : http://localhost:3000");
    
})
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie("name", "Shourya")
    res.send("Heyyy")
})

app.get('/read', function (req, res) {
    console.log(req.cookies);
    res.send("Read Page")
})


// Password encryption using bcrypt genSalt 
app.get('/password', function (req, res) {
    // genSalt basically generate the salt | Saltround -> "10" default number
    bcrypt.genSalt(10, function (err, salt) { // salt is random String OR Salt ek random extra value hoti hai jo password ko hash karne se pehle uske saath use hoti hai.
        bcrypt.hash("Shourya", salt, function (err, hash) { // Hash password ka ek transformed version hota hai, jise database mein store karte hain, original password nahi.
            // Store hash in your password DB.
            res.send(hash);
            console.log(hash);
        });
    });
})

// Password compare to check
app.get('/pwdcompare', (req, res) => {
    bcrypt.compare("Shourya", "$2b$10$bslnpIDoJ71SxabprfdkieYParlYbhazOvHbpZm1D3jrYa.INIGhS", function (err, result) {
        // result == true
        res.send(result);
    });
})



// JWT 
app.get('/jwt', function(req, res){
   let token = jwt.sign({email: "shourya@example.com"}, "secret"); // secret code must be there at place of secret its very important not to give publically 
   res.cookie("token", token);
   res.send("done");
})

app.get('/jwt/read', function(req, res){
    // res.send(req.cookies);
    // res.send(req.cookies.token);
    // jwt.verify() ka use JWT token ko verify karne ke liye hota hai ki token valid hai ya nahi.
    let data = jwt.verify(req.cookies.token, "secret");
    res.send(data);
})


app.listen(3000, () => {
    console.log("done: http://localhost:3000");
})
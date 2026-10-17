const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('./models/user');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("index");
});


// user create
app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;
    //password hashing 
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            // Store hash in your password DB.
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({ email }, "shhhhhhhhh");
            res.cookie("token", token);
            res.send(createdUser);
        });
    });


});

app.get('/login', (req, res) => {
    res.render("login")
})

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.send("Something went wrong!!");

    //  console.log(user.password, req.body.password);
    bcrypt.compare(password, user.password, function (err, result) {
        // console.log(result);
        if(result){
            let token = jwt.sign({ email }, "shhhhhhhhh");
            res.cookie("token", token);
            res.send("Yes you can login");
        }
        else res.send("Something went wrong!!")  
    });


})

app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});

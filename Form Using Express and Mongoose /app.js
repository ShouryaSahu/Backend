const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user')


app.set("view engine", 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/read", async function(req, res){
    let users = await userModel.find();
    res.render("read", {users: users}); // also write as {users} only if name is same
});

app.get("/delete/:id", async function(req, res){
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
});

app.get("/edit/:id", async function(req, res){
    let user = await userModel.findOne({_id: req.params.id})
    res.render('edit', {user})
});

app.post("/update/:id", async function(req, res){
    let {name, email, image} = req.body;

    let user = await userModel.findOneAndUpdate({_id: req.params.id}, {name, image, email}, {new: true});
    res.redirect('/read')
});

app.post('/create', async function(req, res){
    let {name, email, image} = req.body; // Destructuring
     let createdUser = await userModel.create({
        name,
        email,
        image
        // name: req.body.name,
        // email: req.body.email,
        // image: req.body.image
    })

    res.redirect('/read');
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})
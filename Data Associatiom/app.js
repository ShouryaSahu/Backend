const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');



app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "Shourya",
        age: 21,
        email: "s@gmail.com",
    })
    res.send(user);
})

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postData: "Hello saare log kaise ho",
        user: "6ad3b2751613cb47bb3a8823",
    })

    let user = await userModel.findOne({_id: "6ad3b2751613cb47bb3a8823"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000, function () {
    console.log("http://localhost:3000");
});

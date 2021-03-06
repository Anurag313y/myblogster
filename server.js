const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.static(path.join(__dirname, "build")));
dotenv.config()
require('./db/connection')
const User = require('./models/userschema')
app.use(express.json())

app.use(require('./router/auth'))



// // //middlelware
// const middleware = (req, res, next) => {
//     console.log("my middleware")
//     next();
// }
// // middleware();
// app.get('/about', middleware, (req, res) =>{
//     console.log("about")
//     res.send("hello from about page")
   
// });


// app.get('/', (req, res) =>{
//     res.send("hello from home page")
// });

// app.get('/about', (req, res) =>{
//     res.send("hello from about page")
   
// });

app.get('/signup', (req, res) =>{
    res.send("hello from signup page")
});

app.get('/signin', (req, res) =>{
    res.send("hello from signin page")
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
});
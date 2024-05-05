// commands 
// npm init -y
// npm install express 
 
// const fs = require("fs"); //* -->> this is built in Node.js
// const express = require("express"); //* -->> this have to bring from internet


// work -- > create a todo app that lets users store todos on the server 
// try to create a http server from scratch in c
// create a http server from scratch in rust using actix-web 
// create an http server in golang using the gurrila framework
// spring boot java  

const express = require('express')
const port =3000


const app = express();
app.get('/',function(req,res){
    res.send('hello world!')
})

// app.listen(port,function(){
//     console.log(`example app listening on port ${port}`);
// })
 



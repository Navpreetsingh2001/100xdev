// npm install nodemopd
const { log } = require('console');
const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const port =3000

// app.get('/' ,(req,res) => {
//     res.send('hello world')
// })
app.use(bodyParser({}))
app.post('/conversations' ,(req,res) => {
    console.log(req.body);
    // console.log(req.headers['authorization']);
    res.send({
        msg : "2+2 = 4"
    })
})

app.listen(port,() => {
    console.log(`Port is ${port}`);
})
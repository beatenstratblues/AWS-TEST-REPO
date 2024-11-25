const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello this is my first express server, that is deployed on AWS, hello Pulla and friends, will join you");
})

app.listen(8000, ()=>{
    console.log("Server connected....")
})
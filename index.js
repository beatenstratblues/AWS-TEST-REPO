const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Hello this is my first express server, that is deployed on AWS, hello Pulla and friends, will join you");
})

app.listen(PORT, ()=>{
    console.log("Server connected....")
})
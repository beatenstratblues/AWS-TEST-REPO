const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Hello Komal,Aman,shrishti, This is a cloud deployed node application!!");
})

app.listen(PORT, ()=>{
    console.log("Server connected....")
})
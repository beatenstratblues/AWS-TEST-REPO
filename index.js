const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Hello Komal,Aman,shrishti,harsh,navneesh and Shraddha, :)))))");
})

app.listen(PORT, ()=>{
    console.log("Server connected....")
})
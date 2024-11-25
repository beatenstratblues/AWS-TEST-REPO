const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Hello this is my frist cloud application, Hello Shraddha, komal, papa, mummy and everybody....");
})

app.listen(PORT, ()=>{
    console.log("Server connected....")
})
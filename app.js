const express = require('express')
const app = express();

app.get('/home',(req,res)=>{
   res.send("<h1>express server!</h2>")    
});

app.listen(8000,(req,res)=>{
    console.log('running at port 8000!')
})
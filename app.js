const express = require('express')
const app = express();

app.get('/home',(req,res)=>{
    console.log('req from user -', req.query.name)
   res.send("<h1>express server!</h2>")    
});

app.listen(8000,(req,res)=>{
    console.log('running at port 8000!')
})
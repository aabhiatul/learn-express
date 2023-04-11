const express = require('express')
const path = require('path')
const fillterUser = require('./middleware')

const route = express.Router()


const app = express();

route.use(fillterUser)
// app.get('/home',(req,res)=>{
//     console.log('req from user -', req.query.name)
//    res.send(`
//    <h1>express server!</h2>
//    <a href='/about'>go to home</button>
//    `)    
// });
// app.get('/about',(req,res)=>{
//     res.send(`
//     <input type="text" value=${req?.query?.name}/><a href='/home'>go to home</button>
//     `)
// })
// const publicPath = path.join(__dirname,'public')
// // app.use(express.static(publicPath))
// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/home',(req,res)=>{
//     res.sendFile(`${publicPath}/home.html`)
// })
// app.get('/*',(req,res)=>{
//     res.sendFile(`${publicPath}/404.html`)
// })


// ----Middleware----



// app.use(fillterUser)

route.get('/',(req,res)=>{
    res.send('Hi there it is home page')
})
route.get('/user',(req,res)=>{
    res.send('this is user page!')
})


// ----Route level Middleware -----
// Route level middleware
// apply middleware on single Route
// middleware apply from difrent file

app.get('/about',(req,res)=>{
    res.send('Hi there it is home page')
})
app.get('/contact',fillterUser,(req,res)=>{
    res.send('this is contact page!')
})

app.use('/',route)
app.listen(8000,(req,res)=>{
    console.log('running at port 8000!')
})





const express = require('express')
const path = require('path')
const app =  express()
const router = express.Router()

app.listen(5000, ()=>{console.log("server running on port 5000")})

app.use(express.static("build"))

app.get('/calculator', (req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})
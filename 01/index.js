const express=require('express')
require('dotenv').config()
const app=express()
const port=4000

app.get('/',(req,res)=>{
    res.send("hellow")
})

app.get('/twitter',()=>{
    res.send('acdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>hellow</h1>')
})
app.listen(process.env.Port,()=>{
    console.log(`port running on ${port}`)
})
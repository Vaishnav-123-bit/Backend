import express from "express"
const app=express()
app.get('/',(req,res)=>{
    res.send("helo")
})

const port=process.env.PORT || 3000

app.get('/api/jokes',(req,res)=>{
    const joke=[
        {
            id:"1",
            name:"abc",
            val:"this is joke 1"

        },
        {
            id:"2",
            name:"ab3",
            jval:"this is joke 1"

        }
    ]
    res.send(joke)
})

app.listen(port,()=>{
    console.log(`listening : http://localhost:${port}`)
})